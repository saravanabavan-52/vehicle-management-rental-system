function Owners() {
  const owners = [
    { name: "Prime Wheels", city: "Chennai", vehicles: 42, status: "Verified" },
    { name: "Metro Drive Co", city: "Bengaluru", vehicles: 28, status: "Review" },
    { name: "Coastal Rentals", city: "Kochi", vehicles: 19, status: "Verified" },
    { name: "Urban Fleet", city: "Hyderabad", vehicles: 13, status: "Documents Due" },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">Owner Management</span>
          <h1>Owners</h1>
          <p>Approve rental partners, check documents, and monitor owner fleets.</p>
        </div>
        <button className="admin-button" type="button">Add Owner</button>
      </div>

      <div className="admin-stat-grid admin-stat-grid--compact">
        <div className="admin-stat-card"><span>Total Owners</span><strong>84</strong><small>11 cities covered</small></div>
        <div className="admin-stat-card"><span>Verified</span><strong>72</strong><small>86% approval rate</small></div>
        <div className="admin-stat-card"><span>Pending</span><strong>12</strong><small>Need document review</small></div>
      </div>

      <div className="admin-table">
        <div className="admin-table__head">
          <span>Owner</span><span>City</span><span>Vehicles</span><span>Status</span>
        </div>
        {owners.map((owner) => (
          <div className="admin-table__row" key={owner.name}>
            <strong>{owner.name}</strong>
            <span>{owner.city}</span>
            <span>{owner.vehicles}</span>
            <span className="admin-status">{owner.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Owners;  
