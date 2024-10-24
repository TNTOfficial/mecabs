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
import { Select, SelectItem, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectTrigger } from "@radix-ui/react-select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";
import { createBooking } from "@/actions/bookings/create-booking";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Modal } from "@/components/modal";
import { LoginForm } from "@/features/auth/components/login-form";
import { SuccessModal } from "./success-modal";
import Link from "next/link";

const bookingTypes = {
  BOOKING: "booking",
  HOURLY: "hourly",
  PARCEL: "parcel",
} as const;

type BookingType = (typeof bookingTypes)[keyof typeof bookingTypes];

export const BookingForm: React.FC = () => {
  const [isFormMinimized, setIsFormMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<BookingType>(bookingTypes.BOOKING);
  const { isLoading, getCurrentLocation } = useGeolocation();
  const [pickupCoordinates, setPickupCoordinates] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [dropoffCoordinates, setDropoffCoordinates] =
    useState<google.maps.LatLngLiteral | null>(null);

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [parentBookingId, setParentBookingId] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [isReturnBooking, setIsReturnBooking] = useState<boolean>(false);

  const [skipLogin, setSkipLogin] = useState<boolean>(false);
  const pickupInputRef = useRef<AutoCompleteInputRef>(null);
  const dropoffInputRef = useRef<AutoCompleteInputRef>(null);
  const { distance, duration, resetDirections } = useDirections(
    pickupCoordinates,
    dropoffCoordinates
  );
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      bookingType: activeTab,
      bookingMode: "now",
      babySeat: false,
      vehicleType: activeTab === "parcel" ? "" : "sedan",
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
    },
  });

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

  // Update your handleReturnBooking function
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
    [vehicleTypes, form]
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
    if (!user && !skipLogin) {
      setShowLoginModal(true);
    }

    if (error || success) {
      const timer = setTimeout(() => {
        setError(undefined);
        setSuccess(undefined);
      }, 3000);
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
    skipLogin,
    activeTab,
    calculateHourlyPrice,
    estimatedPrice,
    error,
    success,
  ]);

  // Update your resetForm function
  const resetForm = () => {
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
  };

  const handleTabChange = (newTab: BookingType) => {
    setActiveTab(newTab);
    form.setValue("bookingType", newTab); // Update the bookingType in form
    resetForm();
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

      let pickupDateTimeUTC = null;
      if (data.pickupDateTime) {
        pickupDateTimeUTC = new Date(data.pickupDateTime.toUTCString());
      }

      const submissionData = {
        ...data,
        bookingType: activeTab,
        pickupDateTime: pickupDateTimeUTC,
        isReturnBooking: isReturnBooking,
        parentBookingId: parentBookingId,
      };

      startTransition(() => {
        createBooking(submissionData).then((response) => {
          if (response?.error) {
            setError(response.error);
          }

          if (response?.success) {
            setSuccess(response.success);
            setParentBookingId(response.bookingId);
            setShowSuccessModal(true);
          }
        });
      });
    } catch {
      setError("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen">
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

      {showLoginModal && (
        <Modal
          open={showLoginModal}
          onOpenChange={(value) => {
            setShowLoginModal(value);
            setSkipLogin(true);
          }}
        >
          <LoginForm formType="login" />
        </Modal>
      )}

      <div
        className={cn(
          "absolute top-4 left-4 bg-white rounded-lg shadow-lg transition-all duration-300",
          isFormMinimized ? "w-12" : "w-[400px]"
        )}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className={cn("font-semibold", isFormMinimized && "hidden")}>
            Book a Ride
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFormMinimized(!isFormMinimized)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {!isFormMinimized && (
          <div className="p-4">
            <Tabs
              defaultValue={bookingTypes.BOOKING}
              onValueChange={(v) => handleTabChange(v as BookingType)}
              className="mb-4"
            >
              <TabsList className="w-full">
                <TabsTrigger value={bookingTypes.BOOKING} className="flex-1">
                  Booking
                </TabsTrigger>
                <TabsTrigger value={bookingTypes.HOURLY} className="flex-1">
                  Hourly
                </TabsTrigger>
                <TabsTrigger value={bookingTypes.PARCEL} className="flex-1">
                  Parcel
                </TabsTrigger>
              </TabsList>
            </Tabs>

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
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
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
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select vehicle">
                                {vehicleTypes.find(
                                  (v) => v.value === field.value
                                )?.type || "Select vehicle"}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              {vehicleTypes
                                .filter((vehicle) => !vehicle.hidden)
                                .map((vehicle) => (
                                  <SelectItem
                                    key={vehicle.value}
                                    value={vehicle.value}
                                    className="flex items-center gap-2 p-2"
                                  >
                                    <div className="flex items-center gap-2">
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
                {distance && duration && (
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
                )}

                {/* Add rest of the form fields... */}

                <FormError message={error} />
                <FormSuccess message={success} />

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Submitting..." : "Request Booking"}
                </Button>
              </form>
            </Form>
            <p className="text-sm font-semibold text-muted-foreground">
              I have read and agreed to the
              <Button variant="link">
                <Link href="/policy">Privacy Policy</Link>
              </Button>
              and
              <Button variant="link">
                <Link href="/terms">Terms and Conditions</Link>
              </Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
