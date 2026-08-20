import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserName } from "../../utils/auth";
import "./Dashboard.css";

const dashboardLinks = [
  {
    label: "Bookings",
    value: "3 Active",
    text: "View your vehicle bookings",
    path: "/user/bookings",
    icon: "🚗",
  },
  {
    label: "Payments",
    value: "Rs. 15,000",
    text: "Check payment history",
    path: "/user/payments",
    icon: "💳",
  },
  {
    label: "Notifications",
    value: "6 New",
    text: "View latest updates",
    path: "/user/notifications",
    icon: "🔔",
  },
  {
    label: "Reviews",
    value: "4 Reviews",
    text: "Manage your reviews",
    path: "/user/reviews",
    icon: "⭐",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const userName = getUserName();

  useEffect(() => {
    toast.success(`Welcome back, ${userName}!`, {
      toastId: "dashboard-welcome",
    });
  }, [userName]);

  const handleCardClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="user-dashboard">

      {/* HEADER */}
      <section className="dashboard-hero">

        <div>
          <span className="dashboard-label">
            USER DASHBOARD
          </span>

          <h1>
            Welcome back, {userName} 👋
          </h1>

          <p>
            Manage your vehicle rentals, bookings and payments
            from one place.
          </p>
        </div>

        <button
          className="new-booking-btn"
          onClick={() => navigate("/user/bookings")}
        >
          + Book a Vehicle
        </button>

      </section>

      {/* STATISTICS */}
      <section className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon green">🚗</div>

          <div>
            <span>Active Bookings</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">📅</div>

          <div>
            <span>Total Trips</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">💰</div>

          <div>
            <span>Total Spent</span>
            <strong>Rs. 35,800</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">⭐</div>

          <div>
            <span>Reviews</span>
            <strong>4</strong>
          </div>
        </div>

      </section>

      {/* MAIN CONTENT */}
      <div className="dashboard-content">

        {/* LEFT */}
        <div className="dashboard-main">

          <div className="section-title">
            <div>
              <span>QUICK ACCESS</span>
              <h2>Manage Your Account</h2>
            </div>
          </div>

          <div className="dashboard-grid">

            {dashboardLinks.map((item) => (
              <button
                className="dashboard-card"
                key={item.path}
                type="button"
                onClick={() => handleCardClick(item)}
              >

                <div className="dashboard-card-top">

                  <div className="dashboard-card-icon">
                    {item.icon}
                  </div>

                  <span className="arrow">
                    →
                  </span>

                </div>

                <h3>{item.label}</h3>

                <strong>{item.value}</strong>

                <p>{item.text}</p>

              </button>
            ))}

          </div>

          {/* UPCOMING BOOKING */}
          <section className="upcoming-card">

            <div className="section-title">
              <div>
                <span>UPCOMING RENTAL</span>
                <h2>Next Booking</h2>
              </div>

              <button
                onClick={() => navigate("/user/bookings")}
              >
                View All
              </button>
            </div>

            <div className="booking-preview">

              <div className="vehicle-image">
                🚙
              </div>

              <div className="booking-info">

                <span className="confirmed">
                  ● Confirmed
                </span>

                <h3>Toyota Innova</h3>

                <p>
                  📅 20 Aug 2026 — 23 Aug 2026
                </p>

                <p>
                  📍 Chennai, Tamil Nadu
                </p>

              </div>

              <div className="booking-price">

                <span>Total Amount</span>

                <strong>
                  Rs. 12,597
                </strong>

                <small>
                  3 Days Rental
                </small>

              </div>

            </div>

          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="dashboard-sidebar">

          {/* PROFILE */}
          <div className="profile-card">

            <div className="profile-avatar">
              {userName?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <h3>{userName}</h3>

            <p>Customer Account</p>

            <button
              onClick={() => navigate("/user/profile")}
            >
              View Profile
            </button>

          </div>

          {/* RECENT PAYMENTS */}
          <div className="recent-card">

            <div className="recent-heading">

              <div>
                <span>PAYMENTS</span>
                <h3>Recent Payments</h3>
              </div>

              <button
                onClick={() => navigate("/user/payments")}
              >
                View
              </button>

            </div>

            <div className="payment-item">

              <div className="payment-icon">
                🚗
              </div>

              <div>
                <strong>Toyota Innova</strong>
                <small>18 Aug 2026</small>
              </div>

              <span>
                Rs. 12,597
              </span>

            </div>

            <div className="payment-item">

              <div className="payment-icon">
                🚘
              </div>

              <div>
                <strong>Hyundai Creta</strong>
                <small>10 Aug 2026</small>
              </div>

              <span>
                Rs. 8,400
              </span>

            </div>

            <div className="payment-item">

              <div className="payment-icon">
                🏍️
              </div>

              <div>
                <strong>Honda Bike</strong>
                <small>02 Aug 2026</small>
              </div>

              <span>
                Rs. 2,999
              </span>

            </div>

          </div>

          {/* NOTIFICATION */}
          <div className="notification-card">

            <div className="notification-icon">
              🔔
            </div>

            <div>
              <strong>
                6 New Notifications
              </strong>

              <p>
                Check your latest booking updates.
              </p>

              <button
                onClick={() =>
                  navigate("/user/notifications")
                }
              >
                View Notifications →
              </button>
            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Dashboard;