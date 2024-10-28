"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas/schema";
import { getUserByEmail } from "@/utils/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null,
  isModal: boolean = false
) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials" };
  }

  if (existingUser && password) {
    const passwordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!passwordMatch) {
      return { error: "Invalid credentials" };
    }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Confirmation email sent!" };
  }

  try {
    //For modal login we dont't want to redirect
    const redirectTo = isModal
      ? undefined
      : callbackUrl || DEFAULT_LOGIN_REDIRECT;
    await signIn("credentials", {
      email,
      password,
      redirectTo: redirectTo,
    });

    if (isModal) {
      return { success: "Logged in successfully!" };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
