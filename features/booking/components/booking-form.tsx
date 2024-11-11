"semi working booking page code";

"use client";

import React, {
  useState,
  useEffect,
  useTransition,
  useCallback,
  useRef,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Info, X } from "lucide-react";
// import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useGeolocation } from "../hooks/use-geolocation";
import { useDirections } from "../hooks/use-directions";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { BookingSchema } from "@/schemas/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import { AutoCompleteInput, AutoCompleteInputRef } from "./auto-complete-input";
import { Map } from "./map";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";
import { createBooking } from "@/actions/bookings/create-booking";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
// import { Modal } from "@/components/modal";
// import { LoginForm } from "@/features/auth/components/login-form";
import { SuccessModal } from "./success-modal";
import Link from "next/link";
import { Booking } from "../types";
import { updateBooking } from "@/actions/bookings/update-booking";
import { EmailModal } from "./email-modal";
import { updateLeadEmail } from "@/actions/leads/update-lead-email";

const bookingTypes = {
  BOOKING: "booking",
  HOURLY: "hourly",
  PARCEL: "parcel",
} as const;

type BookingType = (typeof bookingTypes)[keyof typeof bookingTypes];

interface BookingFormProps {
  isEditBooking?: boolean;
  booking?: Booking;
  onEditSuccess?: () => void;
}
export const BookingForm: React.FC<BookingFormProps> = ({
  isEditBooking,
  booking,
  onEditSuccess,
}) => {
  const [isFormMinimized, setIsFormMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<BookingType>(() => {
    return booking?.bookingType || bookingTypes.BOOKING;
  });
  const { isLoading, getCurrentLocation } = useGeolocation();
  const [pickupCoordinates, setPickupCoordinates] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [dropoffCoordinates, setDropoffCoordinates] =
    useState<google.maps.LatLngLiteral | null>(null);

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  // const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [parentBookingId, setParentBookingId] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [leadId, setLeadId] = useState<string | undefined>("");

  const [isReturnBooking, setIsReturnBooking] = useState<boolean>(false);

  // const [skipLogin, setSkipLogin] = useState<boolean>(false);
  const pickupInputRef = useRef<AutoCompleteInputRef>(null);
  const dropoffInputRef = useRef<AutoCompleteInputRef>(null);
  const { distance, resetDirections } = useDirections(
    pickupCoordinates,
    dropoffCoordinates
  );
  const [isPending, startTransition] = useTransition();
  const { user } = useCurrentUser();

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      bookingType: activeTab,
      bookingMode: "now",
      babySeat: false,
      vehicleType: activeTab === "parcel" ? "anyavailable" : "sedan",
      pickupLocation: "",
      dropoffLocation: "",
      pickupDateTime: new Date(),
      notes: "",
      passengerName: "",
      phoneNumber: "",
      hours: booking?.hours || null,
      recipientName: "",
      isReturnBooking: false,
      parentBookingId: null,
      price: null,
      status: "active",
      pickupCoordinates: undefined,
      dropoffCoordinates: undefined,
    },
  });
//   useEffect(() => {

//     setShowEmailModal(true)
// },[])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const vehicleTypes = [
    {
      type: "Sedan",
      imageUrl: "/sedan_icon.png",
      sitting: "1 - 4 seater",
      selected: true,
      value: "sedan",
      qualityFactor: 1.0,
    },
    {
      type: "Any Available",
      imageUrl: "/sedan_icon.png",
      sitting: "1 - 4 seater",
      selected: true,
      value: "anyavailable",
      qualityFactor: 1.0,
    },
    {
      type: "Premium",
      imageUrl: "/premium_icon.png",
      sitting: "1 - 4 seater",
      selected: false,
      value: "premium",
      qualityFactor: 1.17,
    },
    {
      type: "SUV",
      imageUrl: "/suv_icon.png",
      sitting: "1 - 6 seater",
      selected: false,
      value: "suv",
      qualityFactor: 1.09,
    },
    {
      type: "Maxi Taxi",
      imageUrl: "/maxi_icon.png",
      sitting: "1 - 9 seater",
      selected: false,
      value: "maxi",
      qualityFactor: 1.3,
    },
    {
      type: "Wheelchair Accessible Taxi",
      imageUrl: "/wheelchair.png",
      sitting: "2 wheelchair",
      selected: false,
      value: "wheelchair",
      qualityFactor: 1.3,
      hidden: true,
    },
  ];

  // useEffect(() => {
  //   if (booking && isEditBooking) {
  //     form.reset({
  //       ...booking,
  //       dropoffLocation: booking.dropoffLocation || undefined,
  //       pickupDateTime: new Date(booking.pickupDateTime),
  //     });
  //     if (booking.bookingType) {
  //       setActiveTab(booking.bookingType);
  //     }
  //     form.setValue("hours", booking.hours);
  //     console.log(form.getValues("hours"));

  //     // Set coordinates
  //     if (booking.pickupCoordinates) {
  //       setPickupCoordinates(booking.pickupCoordinates);
  //     }
  //     if (booking.dropoffCoordinates) {
  //       setDropoffCoordinates(booking.dropoffCoordinates);
  //     }
  //     //setting initial locations for the autocomplete input
  //     if (pickupInputRef.current) {
  //       pickupInputRef.current.setValue(booking.pickupLocation);
  //     }
  //     if (dropoffInputRef.current && booking.dropoffLocation) {
  //       dropoffInputRef.current.setValue(booking.dropoffLocation);
  //     }
  //   }
  // }, [booking, isEditBooking, form, activeTab]);

  // Update your handleReturnBooking function

  // Initialize form with booking data if in edit mode
  useEffect(() => {
    if (booking && isEditBooking) {
      form.reset({
        ...booking,
        dropoffLocation: booking.dropoffLocation || undefined,

        pickupDateTime: new Date(booking.pickupDateTime),
      });

      if (booking.pickupCoordinates) {
        setPickupCoordinates(booking.pickupCoordinates);
      }
      if (booking.dropoffCoordinates) {
        setDropoffCoordinates(booking.dropoffCoordinates);
      }

      if (pickupInputRef.current) {
        pickupInputRef.current.setValue(booking.pickupLocation);
      }
      if (dropoffInputRef.current && booking.dropoffLocation) {
        dropoffInputRef.current.setValue(booking.dropoffLocation);
      }
    }
  }, [booking, isEditBooking, form]);
  const handleReturnBooking = (bookingId: string) => {
    // Get current values
    const pickupValue = pickupInputRef.current?.getValue() || "";
    const dropoffValue = dropoffInputRef.current?.getValue() || "";
    const tempPickupCoords = pickupCoordinates;
    const tempDropoffCoords = dropoffCoordinates;

    // Set return booking flags
    setIsReturnBooking(true);
    setParentBookingId(bookingId);
    form.setValue("isReturnBooking", true);
    form.setValue("parentBookingId", bookingId);

    // Swap locations
    setTimeout(() => {
      // Update coordinates
      setPickupCoordinates(tempDropoffCoords);
      setDropoffCoordinates(tempPickupCoords);

      // Update form values
      form.setValue("pickupLocation", dropoffValue);
      form.setValue("dropoffLocation", pickupValue);

      // Update input refs
      if (pickupInputRef.current) {
        pickupInputRef.current.setValue(dropoffValue);
      }
      if (dropoffInputRef.current) {
        dropoffInputRef.current.setValue(pickupValue);
      }
    }, 0);
  };

  const calculatePrice = useCallback(
    (distanceInMeters: number, vehicleType: string) => {
      // Base price per kilometer
      const basePrice = 2.5;

      // Find the selected vehicle's quality factor
      const vehicle = vehicleTypes.find((v) => v.value === vehicleType);
      const qualityFactor = vehicle?.qualityFactor || 1.0;

      // Convert meters to kilometers
      const distanceInKm = distanceInMeters / 1000;

      // Calculate final price
      const price = basePrice * distanceInKm * qualityFactor;
      // Add minimum fare of $10
      let approxPrice = Math.max(10, Math.round(price * 100) / 100);
      if (form.getValues("babySeat")) {
        approxPrice += Number(25);
      }
      return approxPrice;
    },
    [form, vehicleTypes]
  );

  // Calculating hourly price
  const calculateHourlyPrice = useCallback(
    (hours: number, vehicleType: string) => {
      const baseHourlyRate = 85;
      const vehicle = vehicleTypes.find((v) => v.value === vehicleType);
      const qualityFactor = vehicle?.qualityFactor || 1.0;
      return Math.round(baseHourlyRate * hours * qualityFactor);
    },
    [vehicleTypes]
  );

  useEffect(() => {
    // if (!user && !skipLogin) {
    //   setShowLoginModal(true);
    // }

    if (error || success) {
      const timer = setTimeout(() => {
        setError(undefined);
        setSuccess(undefined);
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (activeTab === bookingTypes.HOURLY) {
      const hours = form.getValues("hours");
      const vehicleType = form.getValues("vehicleType");
      const hourlyPrice = calculateHourlyPrice(hours!, vehicleType);
      setEstimatedPrice(hourlyPrice);
      form.setValue("price", estimatedPrice);
    }
    if (distance) {
      const numericDistance =
        parseFloat(distance.replace(/[^0-9.]/g, "")) * 1000; // Convert to meters
      const price = calculatePrice(
        numericDistance,
        form.getValues("vehicleType")
      );
      setEstimatedPrice(price);
      form.setValue("price", estimatedPrice);
    } else {
      setEstimatedPrice(null);
    }
  }, [
    calculatePrice,
    distance,
    form,
    user,
    // skipLogin,
    activeTab,
    calculateHourlyPrice,
    estimatedPrice,
    error,
    success,
  ]);

  // Update your resetForm function
  const resetForm = useCallback(() => {
    console.log("inside the reset form");

    form.reset({
      bookingType: activeTab,
      bookingMode: "now",
      babySeat: false,
      vehicleType: "sedan",
      pickupLocation: "",
      dropoffLocation: "",
      pickupDateTime: new Date(),
      notes: "",
      passengerName: "",
      phoneNumber: "",
      hours: null,
      recipientName: "",
      isReturnBooking: false,
      parentBookingId: null,
    });

    setPickupCoordinates(null);
    setDropoffCoordinates(null);
    setEstimatedPrice(null);
    setError(undefined);
    setSuccess(undefined);
    resetDirections();
    setIsReturnBooking(false);
    setParentBookingId(null);
    // Reset input refs
    pickupInputRef.current?.reset();
    dropoffInputRef.current?.reset();
  }, [activeTab, form, resetDirections]);

  // const handleTabChange = (newTab: BookingType) => {
  //   console.log("Handletab is getting called");

  //   console.log("new tab", newTab);
  //   setActiveTab(newTab);
  //   console.log("new active tab", activeTab);

  //   resetForm();
  //   console.log("calling reset form");
  // };

  const handleTabChange = (newTab: BookingType) => {
    // First update the active tab
    setActiveTab(newTab);

    if (booking && isEditBooking) {
      // Reset form with new tab-specific values
      form.reset({
        bookingType: booking?.bookingType || activeTab,
        bookingMode: booking?.bookingMode || "now",
        babySeat: booking?.babySeat || false,
        vehicleType:
          booking?.vehicleType || activeTab === "parcel"
            ? "anyavailable"
            : "sedan",
        pickupLocation: booking?.pickupLocation || "",
        dropoffLocation: booking?.dropoffLocation || "",
        pickupDateTime: booking?.pickupDateTime
          ? new Date(booking.pickupDateTime)
          : new Date(),
        notes: booking?.notes || "",
        passengerName: booking?.passengerName || "",
        // phoneNumber: booking?.phoneNumber || "",
        hours: Number(booking?.hours) || null,
        recipientName: booking?.recipientName || "",
        isReturnBooking: booking?.isReturnBooking || false,
        parentBookingId: booking?.parentBookingId || null,
        price: booking?.price || null,
        status: booking?.status || "active",
        pickupCoordinates: booking?.pickupCoordinates || undefined,
        dropoffCoordinates: booking?.dropoffCoordinates || undefined,
        phoneNumber: booking?.phoneNumber || "",
      });
      // setPickupCoordinates(null);
      // setDropoffCoordinates(null);
      // Reset other state
      // setEstimatedPrice(null);
      setError(undefined);
      setSuccess(undefined);
      // setIsReturnBooking(false);
      // setParentBookingId(null);
    } else {
      // Reset coordinates and maps
      setPickupCoordinates(null);
      setDropoffCoordinates(null);
      resetDirections();

      // Reset input refs
      if (pickupInputRef.current) {
        pickupInputRef.current.reset();
      }
      if (dropoffInputRef.current) {
        dropoffInputRef.current.reset();
      }
    }
  };

  const handlePlaceSelect = (
    setter: React.Dispatch<
      React.SetStateAction<google.maps.LatLngLiteral | null>
    >,
    fieldName: "pickupCoordinates" | "dropoffCoordinates"
  ) => {
    return (place: google.maps.places.AutocompletePrediction) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ placeId: place.place_id }, (results, status) => {
        if (
          status === google.maps.GeocoderStatus.OK &&
          results &&
          results[0].geometry &&
          results[0].geometry.location
        ) {
          const location = results[0].geometry.location.toJSON();
          setter(location);
          form.setValue(fieldName, location, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      });
    };
  };

  const handleLocatorClick = async () => {
    try {
      const userLocation = await getCurrentLocation();
      if (userLocation) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode(
          {
            location: userLocation,
          },
          (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results) {
              const pickupLocation = results[0].formatted_address;
              form.setValue("pickupLocation", pickupLocation);
              if (pickupInputRef.current) {
                pickupInputRef.current.setValue(pickupLocation);
              }
            }
          }
        );
      }
    } catch (error) {
      console.error("Error getting location:", error);
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  // Update your onSubmit function
  const onSubmit = async (data: z.infer<typeof BookingSchema>) => {
    try {
      setError("");
      setSuccess("");

      const pickupDateTimeUTC = data?.pickupDateTime
        ? new Date(data.pickupDateTime.toUTCString())
        : null;
      const modeWatcher = form.watch("bookingMode");
      const submissionData = {
        ...data,
        bookingType: activeTab,
        pickupDateTime:
          modeWatcher === "now"
            ? new Date(new Date().toUTCString())
            : pickupDateTimeUTC,
        babySeat: modeWatcher === "later" ? true : false,
        dropoffCoordinates: activeTab === "hourly" ? null : dropoffCoordinates,
        hours: activeTab === "hourly" ? data.hours : null,
      };

      if (isEditBooking && booking?.id) {
        startTransition(() => {
          updateBooking(booking!.id, submissionData)
            .then((response) => {
              if (response?.error) {
                setError(response?.error);
              }
              if (response?.success) {
                setSuccess(response.success);
                onEditSuccess?.();
              }
            })
            .catch((err) => {
              setError(err.message || "Failed to update booking");
            });
        });
        return;
      }
      // Only create new booking if not in edit mode
      if (!isEditBooking) {
        startTransition(() => {
          createBooking(submissionData).then((response) => {
            if (response?.error) {
              setError(response.error);
            }
            if (response?.success) {
              setSuccess(response.success);
              setParentBookingId(response.bookingId);
              //Showing email modal if there is leadId
              if (response.leadId) {
                console.log(response);
                setLeadId(response.leadId);
                setShowEmailModal(true);
              } else {
                setShowSuccessModal(true);
              }
            }
          });
        });
      }
    } catch {
      setError("Failed to submit booking. Please try again.");
    }
  };

  // Fixed vehicle type selection with proper image handling
  const renderVehicleSelectValue = (selectedValue: string) => {
    const selectedVehicle = vehicleTypes.find((v) => v.value === selectedValue);
    if (!selectedVehicle) {
      return <span>Select vehicle</span>;
    }

    return (
      <div className="flex gap-3">
        <div className="w-6 h-6 relative">
          <Image
            src={selectedVehicle.imageUrl}
            alt={selectedVehicle.type}
            fill
            className="object-contain"
          />
        </div>
        <span>{selectedVehicle.type}</span>
      </div>
    );
  };

  // const handleLeadEmailUpdate = async (values: z.infer<typeof LeadSchema>) => {
  //   console.log(values, "Im getting called");

  //   startTransition(() => {
  //     updateLeadEmail({
  //       email: values.email,
  //       leadId: leadId!,
  //     }).then((response) => {
  //       if (response.error) {
  //         setError(response.error);
  //       }
  //       if (response.success) {
  //         setShowEmailModal(false);
  //         setShowSuccessModal(true);
  //       }
  //     });
  //   });
  // };
  return (
    <div
      className={cn(
        "relative w-full",
        isEditBooking
          ? "min-h-full py-4 px-0"
          : "min-h-[calc(100dvh_-_70.52px)] h-full lg:h-[calc(100dvh_-_70.52px)]"
      )}
    >

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
        }}
        bookingType={activeTab}
        onReturnBooking={() => {
          handleReturnBooking(parentBookingId!);
        }}
        pickupLocation={form.getValues("pickupLocation")!}
        dropoffLocation={form.getValues("dropoffLocation")!}
        isReturnBooking={isReturnBooking}
        onReset={resetForm}
      />

      {showEmailModal && (
        <EmailModal
          isOpen={showEmailModal}
          onClose={() => {
            setShowEmailModal(false);
          }}
          isLoading={isPending}
          onSkip={() => {
            setShowEmailModal(false);
            setShowSuccessModal(true);
          }}
          onSubmit={async (email) => {
            startTransition(async () => {
              const response = await updateLeadEmail({
                email,
                leadId: leadId,
              });

              if (response.success) {
                setShowEmailModal(false);
                setShowSuccessModal(true);
              } else {
                setError(response.error);
              }
            });
          }}
        />
      )}
      {/* {showLoginModal && (
        <Modal
          open={showLoginModal}
          onOpenChange={(value) => {
            setShowLoginModal(value);
            setSkipLogin(true);
          }}
        >
          <LoginForm
            formType="login"
            isModal={true}
            onCloseDialog={() => {
              setShowLoginModal(false);
              setSkipLogin(true);
            }}
          />
        </Modal>
      )} */}

      <div
        className={cn(
          "lg:absolute z-10 bg-white rounded-lg w-full lg:shadow-lg transition-all duration-100 lg:overflow-x-hidden lg:overflow-y-auto",
          isFormMinimized ? "h-16" : "h-[96%]",
          isEditBooking ? "w-full top-0 left-0" : "lg:w-[400px] top-4 left-4"
        )}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="font-semibold">
            {isEditBooking ? "Edit Booking" : "Book a Ride"}
          </h2>

          {!isEditBooking && (
            <Button
             className="max-lg:hidden"
              variant="ghost"
              size="sm"
              onClick={() => setIsFormMinimized(!isFormMinimized)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {!isFormMinimized && (
          <div className="p-4 pt-0">
            <Tabs
              defaultValue={activeTab}
              onValueChange={(v) => handleTabChange(v as BookingType)}
              className="mb-4 "
            >
              <TabsList className="w-full">
                <TabsTrigger
                  value={bookingTypes.BOOKING}
                  className="flex-1 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                  Booking
                </TabsTrigger>
                <TabsTrigger
                  value={bookingTypes.HOURLY}
                  className="flex-1 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                  Hourly
                </TabsTrigger>
                <TabsTrigger
                  value={bookingTypes.PARCEL}
                  className="flex-1 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                  Parcel
                </TabsTrigger>
              </TabsList>
            </Tabs>
            {/* {isEditBooking && (
              <div className=" h-[400px] w-full">
                <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />
              </div>
            )} */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={() => (
                    <FormItem>
                      <FormLabel>Pickup Location</FormLabel>
                      <FormControl>
                        <AutoCompleteInput
                          ref={pickupInputRef}
                          onPlaceSelect={handlePlaceSelect(
                            setPickupCoordinates,
                            "pickupCoordinates"
                          )}
                          placeholder="Enter pickup location"
                          onPlaceValueSet={(value) => {
                            form.setValue("pickupLocation", value, {
                              shouldValidate: true,
                              shouldDirty: true,
                            });
                          }}
                          showLocator={true}
                          onLocatorClick={handleLocatorClick}
                          isLoadingLocation={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {activeTab !== bookingTypes.HOURLY && (
                  <FormField
                    control={form.control}
                    name="dropoffLocation"
                    render={() => (
                      <FormItem>
                        <FormLabel>Drop-off Location</FormLabel>
                        <FormControl>
                          <AutoCompleteInput
                            ref={dropoffInputRef}
                            onPlaceSelect={handlePlaceSelect(
                              setDropoffCoordinates,
                              "dropoffCoordinates"
                            )}
                            placeholder="Enter drop-off location"
                            onPlaceValueSet={(value) => {
                              form.setValue("dropoffLocation", value, {
                                shouldValidate: true,
                                shouldDirty: true,
                              });
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {activeTab !== bookingTypes.HOURLY && (
                  <FormField
                    control={form.control}
                    name="bookingMode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant={
                              field.value === "now" ? "default" : "outline"
                            }
                            onClick={() => {
                              form.setValue("bookingMode", "now");
                            }}
                          >
                            Now
                          </Button>
                          <Button
                            type="button"
                            variant={
                              field.value === "later" ? "default" : "outline"
                            }
                            onClick={() =>
                              form.setValue("bookingMode", "later")
                            }
                          >
                            Later
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {(activeTab === bookingTypes.HOURLY ||
                  form.watch("bookingMode") === "later") && (
                    <>
                      {/* <FormField
                        control={form.control}
                        name="pickupDateTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pickup Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Pick a date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value || undefined}
                                  onSelect={field.onChange}
                                  disabled={(date: Date) => date < new Date()}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pickupTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pickup Time</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */}
                      <FormField
                        control={form.control}
                        name="pickupDateTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pickup Date & Time</FormLabel>
                            <FormControl>
                              <Input
                                type="datetime-local"
                                value={
                                  field.value
                                    ? format(field.value, "yyyy-MM-dd'T'HH:mm")
                                    : ""
                                }
                                onChange={(e) => {
                                  const value = e.target.value
                                    ? new Date(e.target.value)
                                    : null;
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                {activeTab === bookingTypes.HOURLY && (
                  <FormField
                    control={form.control}
                    name="hours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(parseInt(value))
                          }
                          value={field.value?.toString()} // Add this line to fix the value binding
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration">
                              {field.value
                                ? `${field.value} hours`
                                : "Select duration"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => i + 3).map(
                              (hours) => (
                                <SelectItem
                                  key={hours}
                                  value={hours.toString()}
                                >
                                  {hours} hours
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {activeTab !== bookingTypes.PARCEL && (
                  <FormField
                    control={form.control}
                    name="vehicleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full px-2 py-0 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary">
                              <SelectValue>
                                {renderVehicleSelectValue(field.value)}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="z-[999] bg-white w-full">
                              {vehicleTypes
                                .filter((vehicle) => !vehicle.hidden)
                                .map((vehicle) => (
                                  <SelectItem
                                    key={vehicle.value}
                                    value={vehicle.value}
                                    className="flex items-center w-full gap-2 p-2"
                                  >
                                    <div className="flex items-center gap-2 w-full">
                                      <div className="w-6 h-6 relative">
                                        <Image
                                          src={vehicle.imageUrl}
                                          alt={vehicle.type}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                      <div>
                                        <p className="font-medium">
                                          {vehicle.type}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {vehicle.sitting}
                                        </p>
                                      </div>
                                    </div>
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="passengerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {activeTab === bookingTypes.PARCEL
                          ? "Sender Name"
                          : "Passenger Name"}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry="AU"
                          value={field.value}
                          onChange={(phone) => field.onChange(phone)}
                          numberInputProps={{
                            className:
                              "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                            required: true,
                          }}
                          containerClass="w-full"
                          smartCaret={true}
                          withCountryCallingCode={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {activeTab === bookingTypes.PARCEL && (
                  <FormField
                    control={form.control}
                    name="recipientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {form.watch("bookingMode") === "later" &&
                  activeTab === bookingTypes.BOOKING && (
                    <div className="flex flex-row items-start justify-between ">
                      <FormField
                        control={form.control}
                        name="babySeat"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2">
                            <FormLabel>Baby Seat Required?</FormLabel>
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
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-5 w-5" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Extra $25 is charged for a baby seat.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes to Driver</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {distance && duration && (
                  <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
                    <p className="text-sm text-gray-600">
                      Estimated Distance: {distance}
                    </p>
                    <p className="text-sm text-gray-600">
                      Estimated Duration: {duration}
                    </p>
                    {estimatedPrice && (
                      <p className="text-lg font-semibold">
                        Estimated Price: ${estimatedPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                )} */}

                {/* Add rest of the form fields... */}

                <FormError message={error} />
                <FormSuccess message={success} />

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending
                    ? "Submitting..."
                    : isEditBooking
                      ? "Update Booking"
                      : "Request Booking"}
                </Button>
              </form>
            </Form>
            <p className="text-sm font-semibold text-muted-foreground mt-4">
              I have read and agreed to the{" "}
              <Link href="/policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline">
                Terms and Conditions
              </Link>
            </p>
          </div>
        )}
      </div>

      <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
        }}
        bookingType={activeTab}
        onReturnBooking={() => {
          handleReturnBooking(parentBookingId!);
        }}
        pickupLocation={form.getValues("pickupLocation")!}
        dropoffLocation={form.getValues("dropoffLocation")!}
        isReturnBooking={isReturnBooking}
        onReset={resetForm}
      />
    </div>
  );
};
