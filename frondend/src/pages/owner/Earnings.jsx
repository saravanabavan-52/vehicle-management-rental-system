import "./Earnings.css";
import "./OwnerTables.css";

const earnings = [
  { month: "March 2026", bookings: 18, amount: "Rs. 52,000", status: "Paid" },
  { month: "April 2026", bookings: 24, amount: "Rs. 78,500", status: "Paid" },
  { month: "May 2026", bookings: 9, amount: "Rs. 28,000", status: "Pending" },
];

function Earnings() {
  return (
    <div className="owner-page owner-earnings-page">
      <span className="owner-badge">Earnings</span>
      <h1 className="owner-title">Owner Earnings</h1>
      <p className="owner-subtitle">Track monthly income and payout status.</p>

      <div className="owner-table-wrap">
        <table className="owner-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Bookings</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((earning) => (
              <tr key={earning.month}>
                <td>{earning.month}</td>
                <td>{earning.bookings}</td>
                <td><strong>{earning.amount}</strong></td>
                <td>
                  <span className={`owner-status owner-status--${earning.status.toLowerCase()}`}>
                    {earning.status}
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

export default Earnings;
