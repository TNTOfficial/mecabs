import { getUserBookings } from "@/actions/bookings/get-user-bookings";
import { RoleGuard } from "@/features/auth/guard/role-guard";
import { UserBookings } from "@/features/booking/components/user-bookings";
import { BookingTypes } from "@prisma/client";

const UserBookingsPage = async () => {
  const initialData = await getUserBookings(1, 10, {
    bookingType: BookingTypes.booking,
  });

  return (
    <RoleGuard allowedRoles={["USER", "ADMIN"]}>
      <UserBookings initialData={initialData} />
    </RoleGuard>
  );
};

export default UserBookingsPage;
