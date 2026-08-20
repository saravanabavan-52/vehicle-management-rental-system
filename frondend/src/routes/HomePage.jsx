
import { Link, Navigate } from "react-router-dom";
import { getHomePathByRole, getRole, isAuthenticated } from "../utils/auth";
import "./HomePage.css";

const vehicleTypes = [
  {
    title: "Bikes",
    price: "From Rs. 499/day",
    text: "Quick rides for city trips, college runs, and local exploring.",
    className: "bike",
  },
  {
    title: "Cars",
    price: "From Rs. 1,499/day",
    text: "Comfortable hatchbacks and sedans for family and business travel.",
    className: "car",
  },
  {
    title: "Buses",
    price: "From Rs. 4,999/day",
    text: "Reliable buses for events, school trips, and larger groups.",
    className: "van",
  },
  {
    title: "Tourist Vans",
    price: "From Rs. 3,999/day",
    text: "Spacious vans with planned booking slots for group tours.",
    className: "van",
  },
];

const bookingSteps = [
  "Choose vehicle type",
  "Pick date and location",
  "Confirm booking",
];

function HomePage() {
  const auth = isAuthenticated();
  const role = getRole();

  if (auth) {
    return <Navigate to={getHomePathByRole(role)} replace />;
  }

  return (
    <div className="home-page">
      <section className="home-hero" id="home">
        <div className="home-hero__content">
          <span className="home-eyebrow">Vehicle Rental Management</span>
          <h1>Rent bikes, cars, and tourist vans without booking confusion.</h1>
          <p>
            Manage vehicle availability, customer bookings, owner listings, and
            admin approvals from one clean rental platform.
          </p>
          <div className="home-hero__actions">
            <Link to="/register" className="home-btn home-btn--primary">
              Start Booking
            </Link>
            <Link to="/login" className="home-btn home-btn--ghost">
              Login
            </Link>
          </div>
        </div>

        <div className="fleet-preview" aria-label="Fleet preview">
          <div className="fleet-preview__road" />
          <div className="fleet-card fleet-card--bike">
            <span>Bike</span>
            <strong>32+</strong>
            <small>Available</small>
          </div>
          <div className="fleet-card fleet-card--car">
            <span>Car</span>
            <strong>18+</strong>
            <small>Ready today</small>
          </div>
          <div className="fleet-card fleet-card--van">
            <span>Tourist Van+</span>
            <strong>9</strong>
            <small>Group trips</small>
          </div>
        </div>
      </section>

      <section className="home-section" id="vehicles">
        <div className="section-heading">
          <span className="home-eyebrow">All Vehicle Types</span>
          <h2>Everything your rental business needs to display</h2>
        </div>
        <div className="vehicle-grid">
          {vehicleTypes.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.title}>
              <div className={`vehicle-visual vehicle-visual--${vehicle.className}`}>
                <span />
              </div>
              <div>
                <p className="vehicle-card__price">{vehicle.price}</p>
                <h3>{vehicle.title}</h3>
                <p>{vehicle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-band" id="bookings">
        <div>
          <span className="home-eyebrow">Bookings</span>
          <h2>Simple booking status for users, owners, and admins</h2>
          <p>
            Customers book faster,owners track requests, and admins can review
            vehicles and payments from the dashboard.
          </p>
        </div>
        <div className="booking-steps">
          {bookingSteps.map((step, index) => (
            <div className="booking-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
