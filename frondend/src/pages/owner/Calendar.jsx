import "./OwnerTables.css";

const calendarItems = [
  { date: "20 May 2026", vehicle: "Toyota Innova", availability: "Booked" },
  { date: "21 May 2026", vehicle: "Hyundai Creta", availability: "Available" },
  { date: "22 May 2026", vehicle: "Honda City", availability: "Maintenance" },
];

function Calendar() {
  return (
    <div className="owner-page owner-calendar-page">
      <span className="owner-badge">Calendar</span>
      <h1 className="owner-title">Owner Calendar</h1>
      <p className="owner-subtitle">View vehicle availability and booking schedule.</p>

      <div className="owner-table-wrap">
        <table className="owner-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {calendarItems.map((item) => (
              <tr key={`${item.date}-${item.vehicle}`}>
                <td>{item.date}</td>
                <td>{item.vehicle}</td>
                <td>
                  <span className={`owner-status owner-status--${item.availability.toLowerCase()}`}>
                    {item.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
