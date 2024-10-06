"use client";
import { useState, useActionState } from "react";

export default function LoginForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [customLogin, setCustomCLogin] = useState(false);
  return (
    <>
      {customLogin ? (
        <>
          <span onClick={() => setCustomCLogin(false)}>Back</span>
          <h2>Continue with your email</h2>
          <form>
          </form>
        </>
      ) : (
        <>
          {children}
          <button onClick={() => setCustomCLogin(true)}>
            Continue with email
          </button>
        </>
      )}
    </>
  );
}
