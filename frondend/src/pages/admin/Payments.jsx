function Payments() {
  const payments = [
    { id: "PAY-7841", booking: "BK-2048", user: "Aarav Sharma", method: "UPI", amount: "₹7,200", status: "Paid" },
    { id: "PAY-7842", booking: "BK-2049", user: "Nisha Rao", method: "Card", amount: "₹4,100", status: "Authorized" },
    { id: "PAY-7843", booking: "BK-2051", user: "Meera Iyer", method: "Wallet", amount: "₹2,900", status: "Refunded" },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">Finance</span>
          <h1>Payments</h1>
          <p>Review transactions, refunds, owner payouts, and platform fees.</p>
        </div>
        <button className="admin-button" type="button">Download Statement</button>
      </div>

      <div className="admin-stat-grid admin-stat-grid--compact">
        <div className="admin-stat-card"><span>Collected</span><strong>₹18.4L</strong><small>This month</small></div>
        <div className="admin-stat-card"><span>Payouts Due</span><strong>₹5.8L</strong><small>Next cycle</small></div>
        <div className="admin-stat-card"><span>Refunds</span><strong>₹42K</strong><small>8 completed</small></div>
      </div>

      <div className="admin-table">
        <div className="admin-table__head admin-table__head--six">
          <span>Payment</span><span>Booking</span><span>User</span><span>Method</span><span>Amount</span><span>Status</span>
        </div>
        {payments.map((payment) => (
          <div className="admin-table__row admin-table__row--six" key={payment.id}>
            <strong>{payment.id}</strong>
            <span>{payment.booking}</span>
            <span>{payment.user}</span>
            <span>{payment.method}</span>
            <span>{payment.amount}</span>
            <span className="admin-status">{payment.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Payments;
