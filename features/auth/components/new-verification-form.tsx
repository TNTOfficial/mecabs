"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { newVerification } from "@/actions/auth/new-verification";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoginButton } from "./login-button";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center w-full justify-center">
        <h1 className="text-xl text-muted-foreground">
          Confirming your verification
        </h1>
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}

        <LoginButton mode="modal" formType="login" asChild>
          <Button className="border border-transparent text-white bg-[#2e2e2e] px-5 py-2 rounded-3xl text-[0.9rem] font-semibold">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </Dialog>
  );
};
