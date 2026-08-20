function Vehicles() {
  const vehicles = [
    { model: "Toyota Innova Crysta", owner: "Prime Wheels", type: "MPV", rate: "₹3,200/day", status: "Available" },
    { model: "Hyundai Creta", owner: "Metro Drive Co", type: "SUV", rate: "₹2,400/day", status: "Booked" },
    { model: "Maruti Swift", owner: "Coastal Rentals", type: "Hatchback", rate: "₹1,450/day", status: "Maintenance" },
    { model: "Honda City", owner: "Urban Fleet", type: "Sedan", rate: "₹2,050/day", status: "Pending" },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">Fleet Control</span>
          <h1>Vehicles</h1>
          <p>Review listings, approve vehicles, update rates, and track availability.</p>
        </div>
        <button className="admin-button" type="button">Approve Listings</button>
      </div>

      <div className="admin-table">
        <div className="admin-table__head admin-table__head--five">
          <span>Vehicle</span><span>Owner</span><span>Type</span><span>Rate</span><span>Status</span>
        </div>
        {vehicles.map((vehicle) => (
          <div className="admin-table__row admin-table__row--five" key={vehicle.model}>
            <strong>{vehicle.model}</strong>
            <span>{vehicle.owner}</span>
            <span>{vehicle.type}</span>
            <span>{vehicle.rate}</span>
            <span className="admin-status">{vehicle.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
 export default Vehicles;
