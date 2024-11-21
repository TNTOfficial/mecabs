"use client";
import React, { useState, useTransition } from "react";
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
import { MapPin, Truck, X } from "lucide-react";
import { ManageBooking } from "../types";
import { Switch } from "@/components/ui/switch";

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
      bookingId: "",
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
        setSuccess(result.success || "Luggage pickup updated successfully");
        setStep("hidden");
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl space-y-4">
        {/* Initial Step */}
        {step === "hidden" && (
          <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-blue-800">
                  Manage Your Booking
                </h2>
                <p className="text-gray-600 mt-2">
                  Choose how you want to access your booking
                </p>
              </div>
              <div className="space-y-4">
                <Button
                  onClick={handleLoginClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Continue with Login
                </Button>
                <Button
                  onClick={() => setStep("check")}
                  className="w-full bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Continue with Booking ID
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Booking Search Step */}
        {step === "check" && (
          <>
            <Button
              variant="default"
              onClick={() => {
                setSuccess("");
                setError("");
                resetForm();
                setStep("hidden");
              }}
            >
              Back
            </Button>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
                <CardTitle className="text-xl text-blue-800">
                  Find Your Booking
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
                          <FormLabel className="text-blue-800">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your name"
                              className="focus:ring-2 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={manageBokingsForm.control}
                      name="bookingId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-800">
                            Booking ID
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter Booking ID"
                              className="focus:ring-2 focus:ring-blue-500"
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
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
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
          <div>
            <Button
              variant="default"
              onClick={() => {
                setStep("check");
                setSuccess("");
                setError("");
                resetForm();
              }}
            >
              Back
            </Button>
            <h1>
              You have already notify about status. We will reach you shortly!
            </h1>
          </div>
        )}
        {step === "update" && booking && !booking.isLuggagePicked && (
          <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
              <CardTitle className="flex items-center space-x-2 text-xl text-blue-800">
                <Truck className="h-6 w-6 text-blue-500" />
                <span>Booking Details</span>
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={resetForm}
                className="text-gray-500 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
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
                          className="bg-blue-600 hover:bg-blue-700 transition-colors"
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
        )}

        {/* Luggage Pickup Update Dialog */}
        <Dialog
          open={isLuggageDialogOpen}
          onOpenChange={setIsLuggageDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-blue-800">
                Update Luggage Pickup
              </DialogTitle>
              <DialogDescription>
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
                        <FormLabel className="text-blue-800">
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
                      <FormLabel className="text-blue-800">
                        Luggage Pickup Remarks
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter any special instructions for luggage pickup"
                          rows={4}
                          className="focus:ring-2 focus:ring-blue-500"
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
                    className="bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    {isPending ? "Updating..." : "Update Luggage Info"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ManageBookingsForm;
