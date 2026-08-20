import { useState } from "react";
import { toast } from "react-toastify";
import "./Payments.css";

const booking = {
  vehicle: "Toyota Innova",
  vehicleType: "SUV",
  pickupDate: "20 Aug 2026",
  returnDate: "23 Aug 2026",
  days: 3,
  pricePerDay: 3999,
  bookingId: "BK-2026-00125",
};

function Payments() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const subtotal = booking.pricePerDay * booking.days;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlePayment = (event) => {
    event.preventDefault();

    if (paymentMethod === "card") {
      if (
        !form.cardName ||
        !form.cardNumber ||
        !form.expiry ||
        !form.cvv
      ) {
        toast.error("Please fill all card details.");
        return;
      }
    }

    if (paymentMethod === "upi" && !form.upiId) {
      toast.error("Please enter your UPI ID.");
      return;
    }

    toast.success("Payment request submitted successfully!");

    setForm({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      upiId: "",
    });
  };

  return (
    <div className="payments-page">

      {/* HEADER */}
      <div className="payment-header">
        <div>
          <span className="payment-label">
            SECURE CHECKOUT
          </span>

          <h1>Complete Your Payment</h1>

          <p>
            Securely pay for your vehicle rental and confirm
            your booking.
          </p>
        </div>

        <div className="secure-badge">
          🔒 Secure Payment
        </div>
      </div>

      <div className="payment-container">

        {/* LEFT SIDE */}
        <div className="payment-left">

          {/* PAYMENT METHODS */}
          <div className="payment-card">

            <div className="card-heading">
              <div>
                <span className="payment-label">
                  PAYMENT METHOD
                </span>

                <h2>Choose Payment Method</h2>
              </div>
            </div>

            <div className="payment-methods">

              <button
                type="button"
                className={
                  paymentMethod === "card"
                    ? "method active"
                    : "method"
                }
                onClick={() => setPaymentMethod("card")}
              >
                <span className="method-icon">💳</span>

                <span>
                  <strong>Credit / Debit Card</strong>
                  <small>Visa, Mastercard, RuPay</small>
                </span>
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "upi"
                    ? "method active"
                    : "method"
                }
                onClick={() => setPaymentMethod("upi")}
              >
                <span className="method-icon">📱</span>

                <span>
                  <strong>UPI</strong>
                  <small>Google Pay, PhonePe, Paytm</small>
                </span>
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "cash"
                    ? "method active"
                    : "method"
                }
                onClick={() => setPaymentMethod("cash")}
              >
                <span className="method-icon">💵</span>

                <span>
                  <strong>Pay at Pickup</strong>
                  <small>Pay when you collect vehicle</small>
                </span>
              </button>

            </div>

          </div>

          {/* PAYMENT FORM */}
          <div className="payment-card">

            <span className="payment-label">
              PAYMENT DETAILS
            </span>

            <h2>
              {paymentMethod === "card"
                ? "Card Details"
                : paymentMethod === "upi"
                ? "UPI Details"
                : "Pickup Payment"}
            </h2>

            {paymentMethod === "card" && (
              <form
                className="payment-form"
                onSubmit={handlePayment}
              >

                <div className="input-group full">
                  <label>Cardholder Name</label>

                  <input
                    type="text"
                    name="cardName"
                    placeholder="Enter cardholder name"
                    value={form.cardName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group full">
                  <label>Card Number</label>

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    value={form.cardNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Expiry Date</label>

                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM / YY"
                    value={form.expiry}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>CVV</label>

                  <input
                    type="password"
                    name="cvv"
                    placeholder="•••"
                    maxLength="3"
                    value={form.cvv}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="pay-button"
                >
                  Pay Rs. {total.toLocaleString()}
                </button>

              </form>
            )}

            {paymentMethod === "upi" && (
              <form
                className="payment-form single"
                onSubmit={handlePayment}
              >

                <div className="input-group full">
                  <label>UPI ID</label>

                  <input
                    type="text"
                    name="upiId"
                    placeholder="example@upi"
                    value={form.upiId}
                    onChange={handleChange}
                  />
                </div>

                <div className="upi-apps">
                  <span>Google Pay</span>
                  <span>PhonePe</span>
                  <span>Paytm</span>
                  <span>BHIM</span>
                </div>

                <button
                  type="submit"
                  className="pay-button"
                >
                  Pay Rs. {total.toLocaleString()}
                </button>

              </form>
            )}

            {paymentMethod === "cash" && (
              <div className="cash-payment">

                <div className="cash-icon">
                  💵
                </div>

                <h3>Pay at Vehicle Pickup</h3>

                <p>
                  You can pay the rental amount directly
                  when you collect the vehicle.
                </p>

                <button
                  className="pay-button"
                  onClick={handlePayment}
                >
                  Confirm Pay at Pickup
                </button>

              </div>
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <aside className="payment-right">

          <div className="summary-card">

            <span className="payment-label">
              BOOKING SUMMARY
            </span>

            <h2>Your Rental</h2>

            <div className="vehicle-summary">

              <div className="vehicle-placeholder">
                🚙
              </div>

              <div>
                <h3>{booking.vehicle}</h3>
                <p>{booking.vehicleType}</p>
              </div>

            </div>

            <div className="summary-info">

              <div>
                <span>Booking ID</span>
                <strong>{booking.bookingId}</strong>
              </div>

              <div>
                <span>Pickup</span>
                <strong>{booking.pickupDate}</strong>
              </div>

              <div>
                <span>Return</span>
                <strong>{booking.returnDate}</strong>
              </div>

              <div>
                <span>Rental Duration</span>
                <strong>{booking.days} Days</strong>
              </div>

            </div>

            <div className="price-details">

              <div>
                <span>
                  Rental × {booking.days} days
                </span>

                <strong>
                  Rs. {subtotal.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>Taxes & Fees</span>

                <strong>
                  Rs. {tax.toLocaleString()}
                </strong>
              </div>

              <div className="total-row">

                <span>Total Amount</span>

                <strong>
                  Rs. {total.toLocaleString()}
                </strong>

              </div>

            </div>

          </div>

          <div className="security-card">

            <div>🔒</div>

            <div>
              <strong>Safe & Secure Payment</strong>

              <p>
                Your payment information is protected
                using secure encryption.
              </p>
            </div>

          </div>

        </aside>

      </div>

      {/* PAYMENT HISTORY */}
      <section className="payment-history">

        <div className="history-heading">
          <div>
            <span className="payment-label">
              TRANSACTION HISTORY
            </span>

            <h2>Recent Payments</h2>
          </div>
        </div>

        <div className="transaction-table">

          <div className="table-head">
            <span>Transaction</span>
            <span>Vehicle</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          <div className="transaction-row">
            <span>#PAY-00125</span>
            <strong>Toyota Innova</strong>
            <span>18 Aug 2026</span>
            <strong>Rs. 12,597</strong>
            <span className="paid">Paid</span>
          </div>

          <div className="transaction-row">
            <span>#PAY-00124</span>
            <strong>Hyundai Creta</strong>
            <span>10 Aug 2026</span>
            <strong>Rs. 8,400</strong>
            <span className="paid">Paid</span>
          </div>

          <div className="transaction-row">
            <span>#PAY-00123</span>
            <strong>Honda City</strong>
            <span>02 Aug 2026</span>
            <strong>Rs. 5,200</strong>
            <span className="pending">Pending</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Payments;