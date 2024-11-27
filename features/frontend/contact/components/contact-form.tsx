"use client";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormValues } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createContact } from "@/actions/contact/create-contact";
import { toast } from "sonner";
export const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await createContact(data);

      if (!result.success) throw new Error(result.error);

      toast.success(
        "Your response has been sent successfully.We will connect you shortly."
      );
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  }
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white rounded-xl shadow-xl border-t">
      <div>
        <h1 className="text-gray-800 text-3xl font-extrabold">
          Let&apos;s Talk
        </h1>
        <p className="text-sm text-gray-500 mt-4">
          Have some big idea or brand to develop and need help? Then reach out
          we would love to hear about your project and provide help.
        </p>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <IoMailOutline className="text-blue-500 text-[1.5rem]" />
              </div>
              <a
                href="mailto: example@gamil.com"
                className="text-[#007bff] text-sm ml-4"
              >
                <small className="block">Mail</small>
                <strong>example@gamil.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Socials</h2>

          <ul className="flex mt-4 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <LuFacebook className="text-blue-500 text-[1.5rem]" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FiLinkedin className="text-blue-500 text-[1.5rem]" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <PiInstagramLogoLight className="text-blue-500 text-[1.5rem]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="name"
                    className="rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm focus:bg-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm focus:bg-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    className="rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm focus:bg-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 min-h-[150px] focus:bg-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
