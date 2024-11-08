"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
// import { useEffect } from "react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  // useEffect(() => {
  //   setTimeout(() => {
  //     message = null;
  //   });
  // }, 1000);
  return (
    <div className="bg-destructive/15  p-3 rounded-md gap-x-2 text-sm text-destructive flex justify-start items-center gap-3">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
