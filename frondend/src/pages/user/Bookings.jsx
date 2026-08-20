import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import "./Bookings.css";

const vehicleOptions = [
  {
    type: "Car",
    name: "Comfort Car",
    price: 1499,
    seats: 4,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "SUV",
    name: "Family SUV",
    price: 3999,
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Luxury Car",
    name: "Luxury Sedan",
    price: 5999,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Bus",
    name: "Mini Bus",
    price: 4999,
    seats: 20,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Tourist Van",
    name: "Tourist Van",
    price: 3999,
    seats: 12,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Bike",
    name: "City Bike",
    price: 499,
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Motorcycle",
    name: "Sport Motorcycle",
    price: 999,
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
  },
{
  type: "Scooter",
  name: "Electric Scooter",
  price: 699,
  seats: 2,
  image:
    "https://www.bug.hr/img/kroz-grad-na-dva-kotaca-nekada-su-isli-na-zgance-a-sada-na-struju_sQvsiy.png",
},
{
  type: "Van",
  name: "Passenger Van",
  price: 2999,
  seats: 10,
  image:
    "https://southafricatravel.org/wp-content/uploads/2023/11/10-Seater-Minivan.jpg",
},
  {
    type: "Pickup Truck",
    name: "Pickup Truck",
    price: 3499,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=80",
  },
 {
  type: "Truck",
  name: "Cargo Truck",
  price: 2999,
  seats: 3,
  image:
    "https://metroplexselfstorage.com/images/page-1_img02.jpg",
},
    {
    type: "Car",
    name: "Comfort Car",
    price: 1499,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
  },

  {
    type: "SUV",
    name: "Family SUV",
    price: 3999,
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
  },

  {
    type: "Luxury Car",
    name: "Luxury Sedan",
    price: 5999,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
  },

  {
    type: "Bike",
    name: "City Bike",
    price: 499,
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
  },

  {
    type: "Motorcycle",
    name: "Sport Motorcycle",
    price: 999,
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=900&q=80",
  },

  {
    type: "Van",
    name: "Passenger Van",
    price: 2999,
    seats: 10,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
  },
      {
    type: "Hatchback",
    name: "City Hatchback",
    price: 1299,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
  },

    {
    type: "Convertible",
    name: "Premium Convertible",
    price: 7499,
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Pickup Truck",
    name: "Pickup Truck",
    price: 3499,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80",
  },
{
    type: "Minibus",
    name: "Travel Minibus",
    price: 4499,
    seats: 15,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "Hatchback",
    name: "City Hatchback",
    price: 1299,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
  },

  
  {
    type: "Jeep",
    name: "Adventure Jeep",
    price: 2999,
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=900&q=80",
  },


  {
    type: "Road Bike",
    name: "Premium Road Bike",
    price: 799,
    seats: 1,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
  },
];

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);

  const [form, setForm] = useState({
    vehicleType: "Car",
    startDate: "",
    endDate: "",
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const response = await api.get("/rentals/my");

      setBookings(response.data?.rentals || []);
    } catch (error) {
      console.error("Bookings Error:", error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const selectedVehicle = useMemo(() => {
    return vehicleOptions.find(
      (vehicle) => vehicle.type === form.vehicleType
    );
  }, [form.vehicleType]);

  const calculateDays = () => {
    if (!form.startDate || !form.endDate) return 1;

    const start = new Date(form.startDate);
    const end = new Date(form.endDate);

    const difference = end - start;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days > 0 ? days : 1;
  };

  const totalAmount = selectedVehicle
    ? selectedVehicle.price * calculateDays()
    : 0;

  const handleBooking = async (event) => {
    event.preventDefault();

    if (!form.startDate || !form.endDate) {
      toast.error("Please select pickup and return dates.");
      return;
    }

    if (new Date(form.endDate) < new Date(form.startDate)) {
      toast.error("Return date must be after pickup date.");
      return;
    }

    setBookingLoading(true);

    try {
      /*
       * If your backend booking API is ready,
       * you can replace this local booking section
       * with api.post("/rentals", {...})
       */

      const newBooking = {
        _id: `local-${Date.now()}`,
        vehicle: {
          name: selectedVehicle.name,
        },
        vehicleType: selectedVehicle.type,
        startDate: form.startDate,
        endDate: form.endDate,
        amount: totalAmount,
        status: "Booking requested",
      };

      setBookings((current) => [newBooking, ...current]);

      toast.success("Booking request sent successfully!");

      setForm({
        vehicleType: "Car",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to create booking.");
    } finally {
      setBookingLoading(false);
    }
  };

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter(
          (booking) =>
            booking.status?.toLowerCase() === filter.toLowerCase()
        );

  const today = new Date().toISOString().split("T")[0];

  if (loading) {
    return (
      <div className="booking-page">
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Loading your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">

      {/* HERO */}
      <section className="booking-hero">
        <div className="hero-content">
          <span className="hero-badge">🚗 EASY VEHICLE RENTAL</span>

          <h1>
            Find the Perfect
            <span> Vehicle for Your Journey</span>
          </h1>

          <p>
            Choose your vehicle, select your dates and send your booking
            request in just a few clicks.
          </p>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="booking-section">

        <div className="booking-container">

          <div className="section-heading">
            <div>
              <span className="small-title">BOOK YOUR RIDE</span>
              <h2>Choose Your Vehicle</h2>
              <p>
                Select a vehicle that matches your travel requirements.
              </p>
            </div>
          </div>

          {/* VEHICLE CARDS */}
          <div className="vehicle-grid">

            {vehicleOptions.map((vehicle) => (
              <div
                key={vehicle.type}
                className={`vehicle-card ${
                  form.vehicleType === vehicle.type
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    vehicleType: vehicle.type,
                  }))
                }
              >
                <div className="vehicle-image-wrapper">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />

                  <span className="vehicle-type">
                    {vehicle.type}
                  </span>
                </div>

                <div className="vehicle-content">

                  <h3>{vehicle.name}</h3>

                  <div className="vehicle-info">
                    <span>👤 {vehicle.seats} Seats</span>
                    <span>✓ Available</span>
                  </div>

                  <div className="vehicle-bottom">
                    <div>
                      <small>Starting from</small>
                      <strong>
                        Rs. {vehicle.price.toLocaleString()}
                      </strong>
                      <small>/day</small>
                    </div>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();

                        setForm((current) => ({
                          ...current,
                          vehicleType: vehicle.type,
                        }));
                      }}
                    >
                      Select
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* BOOKING FORM */}
          <div className="reservation-box">

            <div className="reservation-header">
              <div>
                <span className="small-title">RESERVATION</span>
                <h2>Complete Your Booking</h2>
              </div>

              <div className="selected-vehicle">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                />

                <div>
                  <small>Selected vehicle</small>
                  <strong>{selectedVehicle.name}</strong>
                </div>
              </div>
            </div>

            <form
              className="booking-form"
              onSubmit={handleBooking}
            >

              <div className="form-group">

                <label>Vehicle Type</label>

                <select
                  name="vehicleType"
                  value={form.vehicleType}
                  onChange={handleChange}
                >
                  {vehicleOptions.map((vehicle) => (
                    <option
                      key={vehicle.type}
                      value={vehicle.type}
                    >
                      {vehicle.type} - Rs.{" "}
                      {vehicle.price.toLocaleString()}/day
                    </option>
                  ))}
                </select>

              </div>

              <div className="form-group">

                <label>Pickup Date</label>

                <input
                  type="date"
                  name="startDate"
                  min={today}
                  value={form.startDate}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>Return Date</label>

                <input
                  type="date"
                  name="endDate"
                  min={form.startDate || today}
                  value={form.endDate}
                  onChange={handleChange}
                />

              </div>

              <div className="price-summary">

                <span>
                  {selectedVehicle.name}
                  <small>
                    {" "}× {calculateDays()} day
                    {calculateDays() > 1 ? "s" : ""}
                  </small>
                </span>

                <strong>
                  Rs. {totalAmount.toLocaleString()}
                </strong>

              </div>

              <button
                className="book-button"
                type="submit"
                disabled={bookingLoading}
              >
                {bookingLoading
                  ? "Sending Request..."
                  : `Book ${selectedVehicle.type}`}
              </button>

            </form>

          </div>

          {/* BOOKINGS */}
          <section className="my-bookings">

            <div className="bookings-header">

              <div>
                <span className="small-title">
                  YOUR RENTALS
                </span>

                <h2>My Bookings</h2>
              </div>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value)
                }
              >
                <option value="All">All Bookings</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Booking requested">
                  Requested
                </option>
              </select>

            </div>

            {filteredBookings.length === 0 ? (
              <div className="empty-bookings">

                <div className="empty-icon">🚗</div>

                <h3>No bookings found</h3>

                <p>
                  You haven't made any vehicle bookings yet.
                </p>

              </div>
            ) : (

              <div className="booking-history">

                {filteredBookings.map((booking) => (

                  <article
                    className="history-card"
                    key={booking._id}
                  >

                    <div className="history-icon">
                      🚘
                    </div>

                    <div className="history-details">

                      <h3>
                        {booking.vehicle?.name ||
                          booking.vehicle?.vehicleName ||
                          "Vehicle"}
                      </h3>

                      <p>
                        {booking.startDate
                          ? new Date(
                              booking.startDate
                            ).toLocaleDateString()
                          : "Date unavailable"}

                        {" — "}

                        {booking.endDate
                          ? new Date(
                              booking.endDate
                            ).toLocaleDateString()
                          : "Date unavailable"}
                      </p>

                    </div>

                    <div className="history-price">

                      <span
                        className={`status ${
                          booking.status
                            ?.toLowerCase()
                            .includes("confirm")
                            ? "confirmed"
                            : booking.status
                                ?.toLowerCase()
                                .includes("pending")
                            ? "pending"
                            : "requested"
                        }`}
                      >
                        {booking.status}
                      </span>

                      <strong>
                        Rs.{" "}
                        {Number(
                          booking.amount ||
                            booking.totalAmount ||
                            0
                        ).toLocaleString()}
                      </strong>

                    </div>

                  </article>

                ))}

              </div>

            )}

          </section>

        </div>

      </section>

    </div>
  );
}

export default Bookings;