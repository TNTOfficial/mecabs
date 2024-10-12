"use client";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { loginSchema } from "@/schemas/schema";
import { IoMailOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/actions/auth/register";

export default function LoginForm({ children }: { children: React.ReactNode }) {
  const [customLogin, setCustomCLogin] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    values: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    registerUser(values).then((data) => {
      console.log(data);
    });
  };

  return (
    <>
      {customLogin ? (
        <>
          <div className="formCheck">
            <button
              onClick={() => setCustomCLogin(false)}
              className="text-black bg-transparent border-none mb-5 flex justify-srart items-center -ml-5"
            >
              <IoIosArrowRoundBack className="text-[2.3rem] text-black" />
              <span className="text-[1.3rem]">Back</span>
            </button>
            <h2 className="text-[2rem] text-black font-bold mb-5">
              Continue with your email
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="test@gmail.com" {...field} />
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
                          placeholder="******"
                          {...field}
                          type="password"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-[2rem] text-black font-bold">
            Sign in to your account
          </h2>
          <h5 className="text-[1.2rem] text-black font-normal">
            Don’t have an account?
            <Link className="font-medium underline px-3" href="">
              Sign Up.
            </Link>
          </h5>
          <div className="pt-10">
            {children}
            <p className="text-[1.1rem] text-zinc-500 text-center font-semibold py-5">
              OR
            </p>
            <button
              onClick={() => setCustomCLogin(true)}
              type="button"
              className="flex justify-between items-center w-full px-10 py-3 border rounded-xl"
            >
              <div className="icon w-[15%] text-center">
                <IoMailOutline className="text-[1.8rem] text-black " />
              </div>
              <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                Continue with email
              </span>
            </button>
          </div>
        </>
      )}
    </>
  );
}
