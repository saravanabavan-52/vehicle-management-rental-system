import { Link } from "react-router-dom";

const adminSections = [
  {
    title: "Users",
    description: "Manage customers, role access, and account status.",
    path: "/admin/users",
  },
  {
    title: "Owners",
    description: "Approve partners, review documents, and monitor fleet quality.",
    path: "/admin/owners",
  },
  {
    title: "Vehicles",
    description: "Audit listings, availability, rates, and maintenance status.",
    path: "/admin/vehicles",
  },
  {
    title: "Bookings",
    description: "Track reservations, cancellations, disputes, and completed trips.",
    path: "/admin/bookings",
  },
  {
    title: "Payments",
    description: "Verify payouts, refunds, platform fees, and failed transactions.",
    path: "/admin/payments",
  },
  {
    title: "Reports",
    description: "Review revenue, utilization, customer growth, and owner performance.",
    path: "/admin/reports",
  },
];

function Dashboard() {
  const stats = [
    { label: "Active Vehicles", value: "328", trend: "+18 this month" },
    { label: "Open Bookings", value: "86", trend: "24 start today" },
    { label: "Monthly Revenue", value: "₹18.4L", trend: "+12.5% vs last month" },
    { label: "Pending Reviews", value: "17", trend: "Owners and vehicles" },
  ];

  const recentActivity = [
    "Priya Motors submitted 4 new SUVs for approval.",
    "Refund processed for booking BK-2048.",
    "Airport pickup fleet utilization reached 82%.",
  ];

  return (
    <div className="admin-stack">
      <section className="admin-hero">
        <div>
          <span className="admin-kicker">Admin Control Center</span>
          <h1>Vehicle Rental Management</h1>
          <p>
            Monitor bookings, owners, vehicles, payments, users, reports, and
            platform settings from one focused admin workspace.
          </p>
        </div>
        <div className="admin-hero__panel">
          <span>Today</span>
          <strong>24 pickups</strong>
          <small>Across 7 city zones</small>
        </div>
      </section>

      <section className="admin-stat-grid">
        {stats.map((item) => (
          <div className="admin-stat-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.trend}</small>
          </div>
        ))}
      </section>

      <section className="admin-section-grid">
        {adminSections.map((section) => (
          <Link key={section.path} to={section.path} className="admin-section-card">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <span>Open {section.title}</span>
          </Link>
        ))}
      </section>

      <section className="admin-panel">
        <div className="admin-panel__header">
          <div>
            <span className="admin-kicker">Operations</span>
            <h2>Recent Activity</h2>
          </div>
        </div>
        <div className="admin-list">
          {recentActivity.map((activity) => (
            <div className="admin-list__row" key={activity}>
              <span>{activity}</span>
              <strong>Reviewed</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
