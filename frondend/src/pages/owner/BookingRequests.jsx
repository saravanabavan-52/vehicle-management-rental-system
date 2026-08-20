import { useState } from "react";
import "./BookingRequest.css";
// import "./OwnerTables.css";

const initialRequests = [
  {
    id: 1,
    customer: "Aarav Sharma",
    email: "aarav@gmail.com",
    phone: "+91 98765 43210",
    vehicle: "Toyota Innova",
    vehicleType: "Car",
    pickupDate: "20 May 2026",
    returnDate: "23 May 2026",
    amount: 8997,
    status: "Pending",
  },
  {
    id: 2,
    customer: "Priya Nair",
    email: "priya@gmail.com",
    phone: "+91 98765 12345",
    vehicle: "Hyundai Creta",
    vehicleType: "SUV",
    pickupDate: "22 May 2026",
    returnDate: "24 May 2026",
    amount: 7998,
    status: "Approved",
  },
  {
    id: 3,
    customer: "Rahul Verma",
    email: "rahul@gmail.com",
    phone: "+91 99887 66554",
    vehicle: "Honda City",
    vehicleType: "Car",
    pickupDate: "26 May 2026",
    returnDate: "28 May 2026",
    amount: 5998,
    status: "Pending",
  },
];

function BookingRequests() {
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const updateStatus = (id, status) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );

    setSelectedRequest(null);
  };

  return (
    <div className="owner-page booking-request-page">

      <span className="owner-badge">
        OWNER BOOKINGS
      </span>

      <h1 className="owner-title">
        Booking Requests
      </h1>

      <p className="owner-subtitle">
        Review customer vehicle rental requests and approve or reject bookings.
      </p>


      {/* Summary */}

      <div className="booking-request-summary">

        <div className="request-summary-card">
          <span>Total Requests</span>
          <strong>{requests.length}</strong>
        </div>

        <div className="request-summary-card request-summary-card--pending">
          <span>Pending</span>
          <strong>
            {requests.filter(
              (item) => item.status === "Pending"
            ).length}
          </strong>
        </div>

        <div className="request-summary-card request-summary-card--approved">
          <span>Approved</span>
          <strong>
            {requests.filter(
              (item) => item.status === "Approved"
            ).length}
          </strong>
        </div>

        <div className="request-summary-card request-summary-card--rejected">
          <span>Rejected</span>
          <strong>
            {requests.filter(
              (item) => item.status === "Rejected"
            ).length}
          </strong>
        </div>

      </div>


      {/* Booking Table */}

      <div className="owner-table-wrap">

        <table className="owner-table">

          <thead>
            <tr>
              <th>Customer</th>
              <th>Vehicle</th>
              <th>Rental Period</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {requests.map((request) => (

              <tr key={request.id}>

                {/* Customer */}

                <td>

                  <div className="customer-cell">

                    <div className="customer-avatar">
                      {request.customer.charAt(0)}
                    </div>

                    <div>
                      <strong>
                        {request.customer}
                      </strong>

                      <small>
                        {request.email}
                      </small>
                    </div>

                  </div>

                </td>


                {/* Vehicle */}

                <td>

                  <strong>
                    {request.vehicle}
                  </strong>

                  <small className="table-subtext">
                    {request.vehicleType}
                  </small>

                </td>


                {/* Dates */}

                <td>

                  <strong>
                    {request.pickupDate}
                  </strong>

                  <small className="table-subtext">
                    Return: {request.returnDate}
                  </small>

                </td>


                {/* Amount */}

                <td>

                  <strong>
                    ₹{request.amount.toLocaleString()}
                  </strong>

                </td>


                {/* Status */}

                <td>

                  <span
                    className={`owner-status owner-status--${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>

                </td>


                {/* Action */}

                <td>

                  <button
                    className="view-request-btn"
                    onClick={() =>
                      setSelectedRequest(request)
                    }
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* Booking Details Modal */}

      {selectedRequest && (

        <div
          className="booking-modal-overlay"
          onClick={() => setSelectedRequest(null)}
        >

          <div
            className="booking-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="booking-modal-header">

              <div>
                <span>BOOKING DETAILS</span>

                <h2>
                  {selectedRequest.vehicle}
                </h2>
              </div>

              <button
                className="close-modal"
                onClick={() =>
                  setSelectedRequest(null)
                }
              >
                ×
              </button>

            </div>


            {/* Customer Information */}

            <div className="booking-detail-section">

              <h3>
                Customer Information
              </h3>

              <div className="booking-detail-grid">

                <div>
                  <span>Name</span>
                  <strong>
                    {selectedRequest.customer}
                  </strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {selectedRequest.email}
                  </strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    {selectedRequest.phone}
                  </strong>
                </div>

              </div>

            </div>


            {/* Rental Information */}

            <div className="booking-detail-section">

              <h3>
                Rental Information
              </h3>

              <div className="booking-detail-grid">

                <div>
                  <span>Vehicle</span>
                  <strong>
                    {selectedRequest.vehicle}
                  </strong>
                </div>

                <div>
                  <span>Vehicle Type</span>
                  <strong>
                    {selectedRequest.vehicleType}
                  </strong>
                </div>

                <div>
                  <span>Pickup Date</span>
                  <strong>
                    {selectedRequest.pickupDate}
                  </strong>
                </div>

                <div>
                  <span>Return Date</span>
                  <strong>
                    {selectedRequest.returnDate}
                  </strong>
                </div>

                <div>
                  <span>Total Amount</span>
                  <strong className="booking-price">
                    ₹{selectedRequest.amount.toLocaleString()}
                  </strong>
                </div>

                <div>
                  <span>Status</span>

                  <strong>
                    <span
                      className={`owner-status owner-status--${selectedRequest.status.toLowerCase()}`}
                    >
                      {selectedRequest.status}
                    </span>
                  </strong>

                </div>

              </div>

            </div>


            {/* Actions */}

            {selectedRequest.status === "Pending" && (

              <div className="booking-modal-actions">

                <button
                  className="reject-btn"
                  onClick={() =>
                    updateStatus(
                      selectedRequest.id,
                      "Rejected"
                    )
                  }
                >
                  Reject Request
                </button>

                <button
                  className="approve-btn"
                  onClick={() =>
                    updateStatus(
                      selectedRequest.id,
                      "Approved"
                    )
                  }
                >
                  Approve Booking
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default BookingRequests;