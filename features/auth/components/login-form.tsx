"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
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
import { LoginSchema, RegisterSchema } from "@/schemas/schema";
import { CardWrapper } from "./card-wrapper";
import { FormError } from "@/components/form-error";
import { CiMail } from "react-icons/ci";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/actions/auth/login";
import { register } from "@/actions/auth/register";
import { IoIosArrowRoundBack } from "react-icons/io";

interface LoginFormProps {
  formType?: "login" | "register";
}

export const LoginForm = ({ formType = "login" }: LoginFormProps) => {
  const [currentFormType, setCurrentFormType] = useState<"login" | "register">(
    formType
  );
  const [error, setError] = useState<string | undefined>("");
  const [showFields, setShowFields] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  // Define the schema based on formType
  const Schema = currentFormType ? RegisterSchema : LoginSchema;

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      email: "",
      password: "",
      ...(currentFormType && { name: "" }), // Add 'name' field for register form
    },
  });

  const onSubmit = (values: z.infer<typeof Schema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      if (currentFormType === "register") {
        register(values)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }
          })
          .catch(() => setError("Something went wrong during registration"));
      } else {
        login(values)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }
          })
          .catch(() => setError("Something went wrong during login"));
      }
    });
  };

  return (
    <CardWrapper
      headerMainLabel={
        currentFormType === "login"
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
      }}
      backButtonLabel="Don't have an account?"
      backButtonHref="/login"
      showSocial={["google", "facebook", "twitter"]}
      showFields={showFields}
    >
      {showFields && (
        <>
          <Button
            variant="link"
            onClick={() => {
              setShowFields(false);
            }}
          >
            <IoIosArrowRoundBack className="text-[1.4rem]" />
            Back
          </Button>

          <div>
            <p className="text-xl text-center font-semibold">Continue with your email</p>
          </div>
        </>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
          <div className="space-y-4">
            {!showFields && (
              <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => {
                  setShowFields(true);
                }}
              >
                <CiMail className="h-5 w-5" />
                <p className="p-2">Continue with email</p>
              </Button>
            )}

            {currentFormType === "register" && showFields && (
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          
                          disabled={isPending}
                          placeholder="Your Name"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
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
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="john.doe@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage />
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
    </CardWrapper>
  );
};
