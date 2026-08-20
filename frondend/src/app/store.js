export const dashboardData = {
  user: {
    stats: [
      { title: "Active Bookings", value: 3 },
      { title: "Pending Payments", value: 1 },
      { title: "Saved Vehicles", value: 8 },
    ],
  },
  owner: {
    stats: [
      { title: "Listed Vehicles", value: 12 },
      { title: "Booking Requests", value: 5 },
      { title: "Monthly Revenue", value: "Rs. 48,000" },
    ],
  },
  admin: {
    stats: [
      { title: "Total Users", value: 240 },
      { title: "Owners", value: 42 },
      { title: "Open Reports", value: 7 },
    ],
  },
};

export const sampleVehicles = [
  { name: "Toyota Innova", status: "Available" },
  { name: "Mahindra Scorpio", status: "Booked" },
  { name: "Tata Nexon EV", status: "Maintenance" },
];

export const sampleBookings = [
  { title: "Airport Pickup", detail: "22 April, 9:00 AM" },
  { title: "Weekend Trip", detail: "24 April, 7:30 AM" },
  { title: "Office Rental", detail: "26 April, 8:00 AM" },
];
