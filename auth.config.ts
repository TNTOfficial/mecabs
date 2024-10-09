import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";
import Credentials from "next-auth/providers/credentials";
export const authConfig = {
  providers: [
    Google,
    Twitter,
    Facebook,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
    }),
  ],
} satisfies NextAuthConfig;
