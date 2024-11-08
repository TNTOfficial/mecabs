"use server";

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import {
  sendVerificationCode as sendCode,
  verifyCode as checkCode,
} from "@/lib/twilio";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
  PhoneRegistrationSchema,
  PhoneSchema,
  PhoneVerificationSchema,
} from "@/schemas/schema";
import { AuthError } from "next-auth";
import * as z from "zod";

export const initiatePhoneVerification = async (
  values: z.infer<typeof PhoneSchema>
) => {
  try {
    const validatedFields = PhoneSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid phone number!" };
    }

    const { phoneNumber } = validatedFields?.data;

    //sending code for verification on twilio
    const result = await sendCode(phoneNumber);
    if (!result.success) {
      return { error: result.error || "Failed to send verification code" };
    }

    return { success: "Verification code sent!" };
  } catch (error) {
    console.log("Something went wrong!", error);
    return {
      error: error instanceof Error ? error.message : "Failed to send code",
    };
  }
};

export const verifyPhoneCode = async (
  values: z.infer<typeof PhoneVerificationSchema>,
  isModal: boolean = false,
  callbackUrl?: string | null
) => {
  try {
    const validatedFields = PhoneVerificationSchema.safeParse(values);
    if (!validatedFields.data) {
      return { error: "Invalid verification code" };
    }
    const { code, phoneNumber } = validatedFields.data;

    const result = await checkCode(phoneNumber, code);
    if (!result.success) {
      return { error: result.error || "Invalid verification code" };
    }

    //checking if user exists
    const existingUser = await db.user.findFirst({
      where: { phoneNumber },
    });

    //if user already exists signing them
    if (existingUser) {
      try {
        if (isModal) {
          // for modal we are using different apporach
          const response = await signIn("credentials", {
            phoneNumber,
            redirect: false,
          });

          if (response?.error) {
            return { error: "Authentication failed!" };
          }

          return {
            success: "Logged in successfully!",
            isExistingUser: true,
          };
        } else {
          //for non modal login
          await signIn("credentials", {
            phoneNumber,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
          });
        }
      } catch (error) {
        console.error("[PHONE_VERIFICATION_ERROR]", error);
        if (error instanceof AuthError) {
          return { error: "Invalid credentials!" };
        }
        return { error: "Authentication failed" };
      }
    }
    //for new users, return success to proceed registration
    return { success: "Verified successfully!", isExistingUser: false };
  } catch (error) {
    console.error("[PHONE_VERIFICATION_ERROR]", error);
    return {
      error: error instanceof Error ? error.message : "Failed to send code",
    };
  }
};

export const completePhoneRegistration = async (
  values: z.infer<typeof PhoneRegistrationSchema>,
  isModal: boolean = false,
  callbackUrl?: string | null
) => {
  try {
    const validatedFields = PhoneRegistrationSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }
    const { name, email, phoneNumber } = validatedFields.data;

    //checking if phone number already registered
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ phoneNumber, email }],
      },
    });
    if (existingUser) {
      return {
        error:
          existingUser.phoneNumber === phoneNumber
            ? "Phone number already exists!"
            : "Email already exists",
      };
    }

    //creating new user
    const user = await db.user.create({
      data: {
        name,
        email,
        phoneNumber,
        emailVerified: new Date().toISOString(),
      },
    });

    if (!user) {
      return { error: "Something went wrong during registration" };
    }

    try {
      if (isModal) {
        // For modal, avoid redirect
        const response = await signIn("credentials", {
          phoneNumber,
          redirect: false,
        });

        if (response?.error) {
          return { error: "Failed to sign in after registration" };
        }

        return {
          success: "Registration completed! Logged in successfully!",
        };
      } else {
        // For non-modal, proceed with redirect
        await signIn("credentials", {
          phoneNumber,
          redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
      }
    } catch (error) {
      console.error("[REGISTRATION_ERROR]", error);
      return { error: "Failed to sign in after registration" };
    }

    return { success: "Registration completed" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong during registration" };
  }
};
