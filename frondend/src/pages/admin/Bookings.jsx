function AdminBookings() {
  const bookings = [
    { id: "BK-2048", user: "Aarav Sharma", vehicle: "Hyundai Creta", date: "16 May 2026", amount: "₹7,200", status: "Confirmed" },
    { id: "BK-2049", user: "Nisha Rao", vehicle: "Honda City", date: "17 May 2026", amount: "₹4,100", status: "Pending" },
    { id: "BK-2050", user: "Rahul Verma", vehicle: "Toyota Innova", date: "18 May 2026", amount: "₹9,600", status: "In Progress" },
    { id: "BK-2051", user: "Meera Iyer", vehicle: "Maruti Swift", date: "20 May 2026", amount: "₹2,900", status: "Cancelled" },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">Booking Operations</span>
          <h1>Bookings</h1>
          <p>Track reservations, trip status, cancellations, and upcoming pickups.</p>
        </div>
        <button className="admin-button" type="button">Export Bookings</button>
      </div>

      <div className="admin-table">
        <div className="admin-table__head admin-table__head--six">
          <span>ID</span><span>User</span><span>Vehicle</span><span>Date</span><span>Amount</span><span>Status</span>
        </div>
        {bookings.map((booking) => (
          <div className="admin-table__row admin-table__row--six" key={booking.id}>
            <strong>{booking.id}</strong>
            <span>{booking.user}</span>
            <span>{booking.vehicle}</span>
            <span>{booking.date}</span>
            <span>{booking.amount}</span>
            <span className="admin-status">{booking.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminBookings;
