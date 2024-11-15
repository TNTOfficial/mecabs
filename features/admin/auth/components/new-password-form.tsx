"use client";

import { useState, useTransition } from "react";
import { NewPasswordSchema } from "@/schemas/schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useSearchParams, useRouter } from "next/navigation";
import { newPassword } from "@/actions/auth/new-password";

export const NewPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          // Redirect to home page after successful password reset
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      });
    });
  };

  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-[400px] card border-t shadow-lg rounded-2xl  ">
          <CardWrapper
            headerMainLabel="Enter a new password"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
          >

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-6">
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
                        <FormMessage className="absolute top-[90%] left-0" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type="submit" className="w-full" disabled={isPending}>
                  Reset password
                </Button>
              </form>
            </Form>

          </CardWrapper>
        </div>
      </section>
    </>

  );
};
