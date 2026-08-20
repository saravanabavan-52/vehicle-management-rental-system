import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";

const recentBookings = [
  {
    id: 1,
    customer: "Arun Kumar",
    vehicle: "Toyota Innova",
    dates: "20 Aug - 23 Aug",
    amount: 8997,
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Priya S",
    vehicle: "Honda City",
    dates: "21 Aug - 22 Aug",
    amount: 2998,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Karthik R",
    vehicle: "Family SUV",
    dates: "24 Aug - 27 Aug",
    amount: 11997,
    status: "Confirmed",
  },
  {
    id: 4,
    customer: "Vijay M",
    vehicle: "Tourist Van",
    dates: "26 Aug - 28 Aug",
    amount: 7998,
    status: "Completed",
  },
];

const vehicleSummary = [
  {
    title: "Total Vehicles",
    value: "18",
    icon: "🚗",
    color: "blue",
    path: "/owner/vehicles",
  },
  {
    title: "Available",
    value: "12",
    icon: "✓",
    color: "green",
    path: "/owner/vehicles",
  },
  {
    title: "Booked",
    value: "5",
    icon: "📅",
    color: "orange",
    path: "/owner/bookings",
  },
  {
    title: "Maintenance",
    value: "1",
    icon: "🔧",
    color: "red",
    path: "/owner/vehicles",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    bookingRequests: 8,
    activeVehicles: 12,
    monthlyEarnings: 78500,
    totalBookings: 36,
  });

  useEffect(() => {
    // You can replace this with your backend API later.
    // Example:
    // api.get("/owner/dashboard")
  }, []);

  const openPage = (path, message) => {
    toast.info(message);
    navigate(path);
  };

  return (
    <div className="owner-dashboard-page">

      {/* ================= HEADER ================= */}

      <div className="owner-dashboard-header">

        <div>
          <span className="owner-dashboard-label">
            VEHICLE RENTAL MANAGEMENT
          </span>

          <h1>Owner Dashboard</h1>

          <p>
            Manage your vehicles, bookings, customers and
            rental earnings from one place.
          </p>
        </div>

        <button
          className="add-vehicle-btn"
          onClick={() =>
            openPage(
              "/owner/vehicles",
              "Opening vehicle management"
            )
          }
        >
          + Add Vehicle
        </button>

      </div>


      {/* ================= STAT CARDS ================= */}

      <div className="owner-stat-grid">

        <div
          className="owner-stat-card"
          onClick={() =>
            openPage(
              "/owner/bookings",
              "Opening booking requests"
            )
          }
        >
          <div className="stat-icon stat-icon--orange">
            📋
          </div>

          <div className="stat-content">
            <span>Booking Requests</span>

            <strong>
              {stats.bookingRequests}
            </strong>

            <small>
              Pending requests
            </small>
          </div>

          <span className="stat-arrow">→</span>
        </div>


        <div
          className="owner-stat-card"
          onClick={() =>
            openPage(
              "/owner/vehicles",
              "Opening vehicles"
            )
          }
        >
          <div className="stat-icon stat-icon--green">
            🚗
          </div>

          <div className="stat-content">
            <span>Active Vehicles</span>

            <strong>
              {stats.activeVehicles}
            </strong>

            <small>
              Currently available
            </small>
          </div>

          <span className="stat-arrow">→</span>
        </div>


        <div className="owner-stat-card">
          <div className="stat-icon stat-icon--blue">
            💰
          </div>

          <div className="stat-content">
            <span>Monthly Earnings</span>

            <strong>
              ₹{stats.monthlyEarnings.toLocaleString()}
            </strong>

            <small className="earning-up">
              ↑ 12.5% this month
            </small>
          </div>
        </div>


        <div className="owner-stat-card">
          <div className="stat-icon stat-icon--purple">
            📊
          </div>

          <div className="stat-content">
            <span>Total Bookings</span>

            <strong>
              {stats.totalBookings}
            </strong>

            <small>
              This month
            </small>
          </div>
        </div>

      </div>


      {/* ================= VEHICLE OVERVIEW ================= */}

      <section className="owner-section">

        <div className="owner-section-header">

          <div>
            <span>FLEET MANAGEMENT</span>

            <h2>Vehicle Overview</h2>
          </div>

          <button
            onClick={() =>
              navigate("/owner/vehicles")
            }
          >
            Manage Vehicles →
          </button>

        </div>


        <div className="vehicle-summary-grid">

          {vehicleSummary.map((item) => (

            <button
              className="vehicle-summary-card"
              key={item.title}
              onClick={() => navigate(item.path)}
            >

              <div
                className={`vehicle-summary-icon vehicle-summary-icon--${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <span>{item.title}</span>

                <strong>{item.value}</strong>
              </div>

            </button>

          ))}

        </div>

      </section>


      {/* ================= MAIN GRID ================= */}

      <div className="owner-main-grid">


        {/* RECENT BOOKINGS */}

        <section className="owner-panel">

          <div className="owner-panel-header">

            <div>
              <span>BOOKINGS</span>

              <h2>Recent Bookings</h2>
            </div>

            <button
              onClick={() =>
                navigate("/owner/bookings")
              }
            >
              View All
            </button>

          </div>


          <div className="owner-booking-list">

            {recentBookings.map((booking) => (

              <div
                className="owner-booking-row"
                key={booking.id}
              >

                <div className="customer-avatar">
                  {booking.customer
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div className="customer-info">

                  <strong>
                    {booking.customer}
                  </strong>

                  <span>
                    {booking.vehicle}
                  </span>

                  <small>
                    {booking.dates}
                  </small>

                </div>

                <div className="booking-amount">

                  <strong>
                    ₹{booking.amount.toLocaleString()}
                  </strong>

                  <span
                    className={`booking-status booking-status--${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="owner-panel quick-actions-panel">

          <div className="owner-panel-header">

            <div>
              <span>SHORTCUTS</span>

              <h2>Quick Actions</h2>
            </div>

          </div>


          <div className="quick-actions">

            <button
              onClick={() =>
                navigate("/owner/vehicles")
              }
            >
              <span>🚗</span>

              <div>
                <strong>Manage Vehicles</strong>
                <small>
                  Add, edit or remove vehicles
                </small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/owner/bookings")
              }
            >
              <span>📋</span>

              <div>
                <strong>Booking Requests</strong>
                <small>
                  Review customer requests
                </small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/owner/earnings")
              }
            >
              <span>💰</span>

              <div>
                <strong>View Earnings</strong>
                <small>
                  Check your rental income
                </small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/owner/profile")
              }
            >
              <span>👤</span>

              <div>
                <strong>Owner Profile</strong>
                <small>
                  Manage your account
                </small>
              </div>

              <b>→</b>
            </button>

          </div>

        </section>

      </div>


      {/* ================= EARNINGS ================= */}

      <section className="earnings-card">

        <div className="earnings-content">

          <span>THIS MONTH</span>

          <h2>
            ₹{stats.monthlyEarnings.toLocaleString()}
          </h2>

          <p>
            Your total rental earnings for this month.
          </p>

          <div className="earnings-growth">
            <strong>↑ 12.5%</strong>
            <span>
              compared with last month
            </span>
          </div>

        </div>


        <div className="earnings-chart">

          <div className="chart-bars">

            <span style={{ height: "35%" }}></span>
            <span style={{ height: "55%" }}></span>
            <span style={{ height: "45%" }}></span>
            <span style={{ height: "70%" }}></span>
            <span style={{ height: "60%" }}></span>
            <span style={{ height: "85%" }}></span>
            <span style={{ height: "95%" }}></span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;