import "./Reviews.css";

const notifications = [
  {
    title: "Booking Confirmed",
    message: "Your Toyota Innova booking is confirmed.",
    status: "New",
  },
  {
    title: "Payment Receipt",
    message: "Payment receipt generated for Booking #1024.",
    status: "Read",
  },
  {
    title: "Review Request",
    message: "Please review your completed Honda City ride.",
    status: "New",
  },
];

function Notifications() {
  return (
    <div className="panel-card user-table-page">
      <span className="badge-soft">Notifications</span>
      <h1 className="page-title">My Notifications</h1>
      <p className="page-subtitle">Recent account and booking updates.</p>

      <div className="user-table-wrap">
        <table className="user-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.message}>
                <td>{notification.title}</td>
                <td>{notification.message}</td>
                <td>
                  <span
                    className={`user-status ${
                      notification.status === "New" ? "user-status--new" : "user-status--read"
                    }`}
                  >
                    {notification.status}
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

export default Notifications;
