"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PhoneRegistrationSchema,
  PhoneSchema,
  PhoneVerificationSchema,
} from "@/schemas/schema";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as z from "zod";
import {
  completePhoneRegistration,
  initiatePhoneVerification,
  verifyPhoneCode,
} from "@/actions/auth/phone-verification";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface PhoneAuthFormProps {
  onCloseDialog?: () => void;
  isModal?: boolean;
}

export const PhoneAuthForm: React.FC<PhoneAuthFormProps> = ({
  onCloseDialog,
  isModal,
}) => {
  const [step, setStep] = useState<"phone" | "verify" | "register">("phone");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const { update: updateSession } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const registrationForm = useForm<z.infer<typeof PhoneRegistrationSchema>>({
    resolver: zodResolver(PhoneRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const phoneForm = useForm<z.infer<typeof PhoneSchema>>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const phoneVerificationForm = useForm<
    z.infer<typeof PhoneVerificationSchema>
  >({
    resolver: zodResolver(PhoneVerificationSchema),
    defaultValues: {
      code: "",
      phoneNumber: "",
    },
  });

  const handleCloseModal = () => {
    if (isModal && onCloseDialog) {
      updateSession();
      setTimeout(() => {
        onCloseDialog();
      }, 1000);
    }
  };

  const onPhoneSubmit = async (values: z.infer<typeof PhoneSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const result = await initiatePhoneVerification(values);

        if (result.error) {
          setError(result.error);
          return;
        }

        if (result.success) {
          setSuccess(result.success);
          setPhoneNumber(values.phoneNumber);
          setStep("verify");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError("Something went wrong during verification");
        }
      }
    });
  };

  const onVerificationSubmit = async (
    values: z.infer<typeof PhoneVerificationSchema>
  ) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const result = await verifyPhoneCode(
          {
            ...values,
            phoneNumber,
          },
          isModal,
          callbackUrl
        );

        if (result.error) {
          setError(result.error);
          return;
        }

        if (result.success) {
          setSuccess(result.success);

          if (result.isExistingUser) {
            handleCloseModal();
            return;
          }

          if (!result.isExistingUser) {
            setStep("register");
          }
        }
      } catch {
        setError("Something went wrong during verification");
      }
    });
  };

  const onRegistrationSubmit = async (
    values: z.infer<typeof PhoneRegistrationSchema>
  ) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const result = await completePhoneRegistration(
          {
            ...values,
            phoneNumber,
          },
          isModal,
          callbackUrl
        );

        if (result?.error) {
          setError(result?.error);
          return;
        }

        if (result?.success) {
          setSuccess(result?.success);
          handleCloseModal();
        }
      } catch (error) {
        if (error instanceof Error) {
          setError("Something went wrong during registration");
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      {step === "phone" && (
        <Form {...phoneForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              phoneForm.handleSubmit(onPhoneSubmit)(e);
            }}
            className="space-y-6"
          >
            <FormField
              control={phoneForm.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      international
                      defaultCountry="AU"
                      value={field.value}
                      onChange={(phone) => field.onChange(phone)}
                      numberInputProps={{
                        className:
                          "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                        required: true,
                      }}
                      containerClass="w-full"
                      smartCaret
                      withCountryCallingCode
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              onClick={(e) => {
                e.preventDefault();
                phoneForm.handleSubmit(onPhoneSubmit)(e);
              }}
            >
              Send code
            </Button>
          </form>
        </Form>
      )}

      {step === "verify" && (
        <Form {...phoneVerificationForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              phoneVerificationForm.handleSubmit(onVerificationSubmit)(e);
            }}
            className="space-y-6"
          >
            <FormField
              control={phoneVerificationForm.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter 6-digit code"
                      type="text"
                      maxLength={6}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              onClick={(e) => {
                e.preventDefault();
                phoneVerificationForm.handleSubmit(onVerificationSubmit)(e);
              }}
            >
              Verify Code
            </Button>
          </form>
        </Form>
      )}

      {step === "register" && (
        <Form {...registrationForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registrationForm.handleSubmit(onRegistrationSubmit)(e);
            }}
            className="space-y-6"
          >
            <FormField
              control={registrationForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registrationForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="your@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              onClick={(e) => {
                e.preventDefault();
                registrationForm.handleSubmit(onRegistrationSubmit)(e);
              }}
            >
              Complete Registration
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
