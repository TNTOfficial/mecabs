"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSearchParams } from "next/navigation";
import {
  LoginSchema,
  RegisterSchema,
  ResetSchema,
  VerificationSchema,
} from "@/schemas/schema";
import { CardWrapper } from "./card-wrapper";
import { FormError } from "@/components/form-error";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/auth/login";
import { register } from "@/actions/auth/register";
import { IoIosArrowRoundBack } from "react-icons/io";
import { newVerification } from "@/actions/auth/new-verification";
import { reset } from "@/actions/auth/reset";
import { useSession } from "next-auth/react";
import { PhoneAuthForm } from "./phone-auth-form";

interface LoginFormProps {
  formType?: "login" | "register";
  onCloseDialog?: () => void;
  isModal?: boolean;
}

export const LoginForm = ({
  formType = "login",
  onCloseDialog,
  isModal,
}: LoginFormProps) => {
  const [currentFormType, setCurrentFormType] = useState<"login" | "register">(
    formType
  );
  const [error, setError] = useState<string | undefined>("");
  const [showFields, setShowFields] = useState<boolean>(false);
  const [showPhoneAuth, setShowPhoneAuth] = useState<boolean>(false);
  const [showVerification, setShowVerification] = useState<boolean>(false);
  const [showReset, setShowReset] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const { update: updateSession } = useSession();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const Schema = currentFormType === "register" ? RegisterSchema : LoginSchema;

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues:
      currentFormType === "register"
        ? { email: "", password: "", name: "" }
        : { email: "", password: "" },
  });

  const verificationForm = useForm<z.infer<typeof VerificationSchema>>({
    resolver: zodResolver(VerificationSchema),
    defaultValues: {
      token: "",
    },
  });

  const ResetForm = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(undefined);
        setSuccess(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const onSubmit = (values: z.infer<typeof Schema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      if (currentFormType === "register") {
        const registerValues = {
          email: values.email,
          password: values.password,
          name: values.name || "",
        };
        register(registerValues)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }

            if (data.verification) {
              setShowVerification(true);
            }
          })
          .catch(() => setError("Something went wrong during registration"));
      } else {
        const loginValues = {
          email: values.email,
          password: values.password,
        };
        login(loginValues, callbackUrl, isModal)
          .then((data) => {
            console.log(data);

            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }

            // If it's modal login and successful, close the dialog
            if (isModal && data === undefined && onCloseDialog) {
              updateSession();
              setTimeout(() => {
                onCloseDialog();
              }, 1000); // Giving the user time to see the success message.
            }

            if (!isModal) {
              updateSession();
            }
          })
          .catch(() => setError("Something went wrong during login"));
      }
    });
  };

  const onVerificationSubmit = (values: z.infer<typeof VerificationSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newVerification(values.token)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            setSuccess(data.success);
            setShowVerification(false);
            setCurrentFormType("login");
          }
        })
        .catch(() => setError("Something went wrong during verification"));
    });
  };

  const onResetSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success && onCloseDialog) {
          setTimeout(() => {
            onCloseDialog();
          }, 5000);
        }
      });
    });
  };
  return (
    <CardWrapper
      headerMainLabel={
        showReset
          ? "Forgot your password?"
          : currentFormType === "login"
          ? "Sign in to your account"
          : "Create a new account"
      }
      headerSubLabel={
        currentFormType === "login"
          ? "Don't have an account?"
          : "Already have an account"
      }
      changeFormType={() => {
        setCurrentFormType(currentFormType === "login" ? "register" : "login");
        setShowReset(false);
        setShowVerification(false);
      }}
      backButtonLabel="Don't have an account?"
      backButtonHref="/login"
      showSocial={["google", "facebook"]}
      showFields={showFields}
      showPhoneAuth={showPhoneAuth}
    >
      {showFields && !showPhoneAuth && (
        <>
          <Button
            variant="link"
            onClick={() => {
              setShowFields(false);
              setShowPhoneAuth(false);
              setShowVerification(false);
              setShowReset(false);
            }}
          >
            <IoIosArrowRoundBack className="text-[1.4rem]" />
            Back
          </Button>

          <div>
            <p className="text-xl text-center font-semibold">
              Continue with your email
            </p>
          </div>
        </>
      )}
      {showPhoneAuth && (
        <>
          <Button
            variant="link"
            onClick={() => {
              setShowPhoneAuth(false);
              setShowVerification(false);
              setShowReset(false);
            }}
          >
            <IoIosArrowRoundBack className="text-[1.4rem]" />
            Back
          </Button>

          <div>
            <p className="text-xl text-center font-semibold">
              Continue with your Phone
            </p>
          </div>
        </>
      )}

      {!showVerification && !showReset && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pt-4"
          >
            <div className="space-y-4">
              {!showFields && !showPhoneAuth && (
                <Button
                  size="lg"
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setShowFields(true);
                    setShowPhoneAuth(false);
                  }}
                >
                  <CiMail className="h-5 w-5" />
                  <p className="p-2">Continue with email</p>
                </Button>
              )}
              {!showPhoneAuth && !showFields && (
                <Button
                  size="lg"
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setShowPhoneAuth(true);
                  }}
                >
                  <CiMobile1 className="h-5 w-5" />
                  <p className="p-2">Continue with phone</p>
                </Button>
              )}
              {showPhoneAuth && (
                <PhoneAuthForm
                  isModal={isModal}
                  onCloseDialog={onCloseDialog}
                />
              )}

              {currentFormType === "register" &&
                showFields &&
                !showPhoneAuth && (
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder="Your Name"
                              type="text"
                            />
                          </FormControl>
                          <FormMessage className="absolute top-[90%] left-0" />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

              {showFields && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="john.doe@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage className="absolute top-[90%] left-0" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        {currentFormType === "login" && (
                          <Button
                            size="sm"
                            variant="link"
                            asChild
                            className="px-0 font-normal"
                            onClick={() => {
                              setShowReset(true);
                            }}
                          >
                            <p>Forgot password?</p>
                          </Button>
                        )}
                        <FormMessage className="absolute top-[90%] left-0" />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            {showFields && (
              <Button disabled={isPending} type="submit" className="w-full">
                {currentFormType === "login" ? "Login" : "Register"}
              </Button>
            )}
          </form>
        </Form>
      )}
      {showVerification && !showReset && (
        <Form {...verificationForm}>
          <form
            onSubmit={verificationForm.handleSubmit(onVerificationSubmit)}
            className="space-y-6"
          >
            <FormField
              control={verificationForm.control}
              name="token"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter verification code"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[90%] left-0" />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Verify
            </Button>
          </form>
        </Form>
      )}

      {showReset && (
        <Form {...ResetForm}>
          <form
            onSubmit={ResetForm.handleSubmit(onResetSubmit)} // <-- Use ResetForm instead of form
            className="space-y-6"
          >
            <div className="space-y-6">
              <FormField
                control={ResetForm.control} // <-- Also make sure to use ResetForm here
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="test@gmail.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage className="absolute top-[90%] left-0" />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Send reset email
            </Button>
          </form>
        </Form>
      )}
    </CardWrapper>
  );
};
