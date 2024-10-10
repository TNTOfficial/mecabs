import type { NextAuthConfig } from "next-auth";
// import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";
import Credentials from "next-auth/providers/credentials";
// import { LoginSchema } from "./schemas/schema";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
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
