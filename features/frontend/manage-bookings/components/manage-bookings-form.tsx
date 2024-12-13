"use client";
import React, { useEffect, useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { getManageBookings } from "@/actions/bookings/get-manage-bookings";
import { updateLuggagePickup } from "@/actions/bookings/update-luggage-pickup";
import { manageBookingSchema, luggageUpdateSchema } from "@/schemas/schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigLeft, MapPin, Truck, X } from "lucide-react";
import { ManageBooking } from "../types";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

import bgbanner from "@/public/09.webp";

export const ManageBookingsForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<"hidden" | "check" | "update">("hidden");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [booking, setBooking] = useState<ManageBooking | null>(null);
  const [isLuggageDialogOpen, setIsLuggageDialogOpen] = useState(false);
  const [luggageUpdateError, setLuggageUpdateError] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  // Form for initial booking search
  const manageBokingsForm = useForm<z.infer<typeof manageBookingSchema>>({
    resolver: zodResolver(manageBookingSchema),
    defaultValues: {
      code: "",
      name: "",
    },
  });

  // Form for luggage pickup update
  const luggageUpdateForm = useForm<z.infer<typeof luggageUpdateSchema>>({
    resolver: zodResolver(luggageUpdateSchema),
    defaultValues: {
      isLuggagePicked: false,
      luggageRemarks: "",
    },
  });

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const onManageBookingsSubmit = (
    values: z.infer<typeof manageBookingSchema>
  ) => {
    startTransition(async () => {
      setError("");
      setSuccess("");
      try {
        const result = await getManageBookings(values);

        if (result.error) {
          setError(result.error);
          return;
        }
        console.log("Found booking", result);

        setSuccess(result.success || "Booking found successfully");
        setBooking(result.booking || null);
        setStep("update");
      } catch {
        const errorMessage =
          "An unexpected error occurred while fetching the booking.";

        setError(errorMessage);
      }
    });
  };

  const handleLuggageUpdateSubmit = (
    values: z.infer<typeof luggageUpdateSchema>
  ) => {
    if (!booking) return;

    startTransition(async () => {
      setLuggageUpdateError("");
      try {
        const result = await updateLuggagePickup({
          bookingId: booking.id,
          isLuggagePicked: values.isLuggagePicked,
          luggageRemarks: values.luggageRemarks || "",
        });

        if (result.error) {
          setLuggageUpdateError(result.error);
          return;
        }

        setIsLuggageDialogOpen(false);
        // if (result.booking) {
        //   setBooking(result.booking);
        // }
        setSuccess(result.success || "Luggage pickup updated successfully");
        setTimeout(() => {
          setStep("hidden");
        }, 2000);
      } catch {
        setLuggageUpdateError("An unexpected error occurred");
      }
    });
  };

  const handleLoginClick = () => {
    router.push("/dashboard/user-bookings");
  };

  const resetForm = () => {
    setStep("hidden");
    setBooking(null);
    setError("");
    setSuccess("");
    manageBokingsForm.reset();
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgbanner.src})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative z-0 before:h-full before:w-full before:bg-slate-950 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
    >
      <div className="w-full max-w-xl space-y-4">
        {/* Initial Step */}
        {step === "hidden" && (
          <>
            <Card className="w-full shadow-none bg-transparent border-none self-start">
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <h1 className="text-[4rem] font-bold text-white">
                    Manage Your Booking
                  </h1>
                  <p className="text-white mt-2 text-[1rem ]">
                    Choose how you want to access your booking
                  </p>
                </div>
                <div className="space-y-4"></div>
              </CardContent>
            </Card>

            <div className="max-w-screen-xl w-full px-3 mx-auto absolute 2xl:bottom-[200px] bottom-[40px] left-[50%] translate-x-[-50%] z-10">
              <div className="continueForm bg-white rounded-[50px] w-full px-16 py-3  shadow-lg border-t flex md:justify-between justify-center items-center flex-wrap gap-4">
                {/* <h3 className="text-[1.6rem] font-bold">Start Your Journey</h3> */}
                <Button
                  onClick={handleLoginClick}
                  className="text-white bg-black py-4 px-16 hover:scale-95 h-auto transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-zinc-700 inline-block text-nowrap border-none rounded-[50px]"
                >
                  Continue with Login
                </Button>
                <Button
                  onClick={() => setStep("check")}
                  className="text-white bg-black py-4 px-16 hover:scale-95 h-auto transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-zinc-700 inline-block text-nowrap border-none rounded-[50px]"
                >
                  Continue with Booking ID
                </Button>

                <Link
                  href="tel: +61 1300012018"
                  className="no-underline text-black flex justify-center items-center gap-2"
                >
                  <FiPhoneCall className="text-black text-[1rem]" />{" "}
                  <span className="font-extrabold text-black text-[.9rem]">
                    +61 1300012018
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Booking Search Step */}
        {step === "check" && (
          <>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300  p-5">
              <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
                <CardTitle className="text-xl text-zinc-800 flex justify-between w-full items-center">
                  <span>Find Your Booking</span>

                  <Button
                    variant="default"
                    className="px-2"
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    <ArrowBigLeft className="me-1" /> <span>Back</span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...manageBokingsForm}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      manageBokingsForm.handleSubmit(onManageBookingsSubmit)(e);
                    }}
                    className="space-y-6"
                  >
                    <FormField
                      control={manageBokingsForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-800">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your name"
                              className="focus:ring-2 focus:ring-zinc-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={manageBokingsForm.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-800">
                            Booking Code
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter Booking Code"
                              className="focus:ring-2 focus:ring-zinc-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="w-full bg-zinc-600 hover:bg-zinc-700 transition-colors"
                        disabled={isPending}
                      >
                        {isPending ? "Searching..." : "Find Booking"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </>
        )}

        {/* Booking Details Step */}
        {step === "update" && booking && booking.isLuggagePicked && (
          <div className="p-5 bg-white rounded-xl flex justify-start items-start flex-col gap-5">
            <h3 className="text-[1.5rem] font-semibold">
              You have already notify about status. We will reach you shortly{" "}
              <span className="text-green-600">!</span>
            </h3>
            <Button
              variant="default"
              className="px-2 self-end"
              onClick={() => {
                setStep("check");
                setSuccess("");
                setError("");
              }}
            >
              <ArrowBigLeft className="me-1" /> <span>Back</span>
            </Button>
          </div>
        )}
        {step === "update" && booking && !booking.isLuggagePicked && (
          <>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 px-5 py-2">
              <CardHeader className="flex flex-row items-center justify-between border-b pb-3 gap-x-2 space-y-0">
                <CardTitle className="text-xl text-zinc-800 flex justify-between w-full items-center">
                  <div>
                    {" "}
                    <Truck className="h-6 w-6 text-zinc-500" />
                    <span>Booking Details</span>
                  </div>
                  <Button
                    variant="default"
                    className="px-2"
                    onClick={() => {
                      setStep("check");
                      setSuccess("");
                      setError("");
                    }}
                  >
                    <ArrowBigLeft className="me-1" /> <span>Back</span>
                  </Button>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetForm}
                  className="text-gray-500 hover:text-red-500 bg-gray-300 mt-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Passenger</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">
                        {booking.passengerName}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span>{booking.phoneNumber}</span>
                        </div>
                      </TableCell>
                      {!booking.isLuggagePicked && (
                        <TableCell>
                          <Button
                            onClick={() => setIsLuggageDialogOpen(true)}
                            className="bg-zinc-600 hover:bg-zinc-700 transition-colors"
                          >
                            Update Luggage Info
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
                {success && <FormSuccess message={success} />}
              </CardContent>
            </Card>
          </>
        )}

        {/* Luggage Pickup Update Dialog */}
        <Dialog
          open={isLuggageDialogOpen}
          onOpenChange={setIsLuggageDialogOpen}
        >
          <DialogContent className="max-w-screen-md">
            <DialogHeader>
              <DialogTitle className="text-zinc-800 text-[1.4rem] font-medium">
                Update Luggage Pickup
              </DialogTitle>
              <DialogDescription className="text-[1.1rem] text-gray-800 font-normal">
                Add any special instructions or remarks for luggage pickup.
              </DialogDescription>
            </DialogHeader>

            <Form {...luggageUpdateForm}>
              <form
                onSubmit={luggageUpdateForm.handleSubmit(
                  handleLuggageUpdateSubmit
                )}
                className="space-y-4"
              >
                <div className="flex flex-row items-center justify-between">
                  <FormField
                    control={luggageUpdateForm.control}
                    name="isLuggagePicked"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-4">
                        <FormLabel className="text-zinc-800">
                          Is luggage picked?
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={luggageUpdateForm.control}
                  name="luggageRemarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-800">
                        Luggage Pickup Remarks
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter any special instructions for luggage pickup"
                          rows={4}
                          className="focus:ring-2 focus:ring-zinc-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {luggageUpdateError && (
                  <FormError message={luggageUpdateError} />
                )}

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsLuggageDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-zinc-600 hover:bg-zinc-700 transition-colors"
                  >
                    {isPending ? "Updating..." : "Update Luggage Info"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ManageBookingsForm;
