import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        // const token =
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzRjYjRmOTRhNjhjNWY1NmY1ZjEzZiIsImlhdCI6MTc1MjQ4NDY4NywiZXhwIjoxNzUyNTcxMDg3fQ.0nstPR_DD_-jyjJ8o6Z7_GbudWZGE-YXwKw1P-iNuO0";
        if (!token) return;

        const response = await axios.get(
          "http://localhost:3000/api/getAllUserBookings", // تعديل هنا فقط
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(response.data);
      } catch (error) {
        console.error("خطأ في جلب الحجوزات:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, []);

  if (loading) return <div className="p-4">جاري تحميل الحجوزات...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You do not have Bookings</p>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                {booking.service?.title}
              </h3>
              <img
                src={booking.service?.images?.[0]}
                alt={booking.service?.title}
                className="w-full h-64 object-cover rounded-md mb-2"
              />
              <p>
                <strong>Location:</strong> {booking.service?.location}
              </p>
              <p>
                <strong>price:</strong> {booking.service?.price} جنيه
              </p>
              <p>
                <strong>Booking Date:</strong>{" "}
                {new Date(booking.eventDate).toLocaleDateString()}
              </p>
              <p>
                <strong>State: {booking.status}</strong>{" "}
                {/* {booking.status === "pending" ? "قيد الانتظار" : booking.status} */}
              </p>
              {booking.notes && (
                <p>
                  <strong>Note:</strong> {booking.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBookings;
