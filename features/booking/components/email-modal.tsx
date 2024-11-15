"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LeadSchema } from "@/schemas/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  onSkip: () => void;
  isLoading: boolean;
}
export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  onSkip,
}) => {
  const form = useForm<z.infer<typeof LeadSchema>>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof LeadSchema>) => {
    onSubmit(data.email);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Get 15% Off Your Booking!
          </DialogTitle>
          <DialogDescription>
            Enter your email to receive a 15% discount on your current booking
            and stay updated with our latest offers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={onSkip}>
                Skip
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {isLoading ? "Saving..." : "Get Discount"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
