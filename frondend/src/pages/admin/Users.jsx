import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/auth";

const users = [
  {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    status: "Active",
    bookings: 12,
  },
  {
    name: "Priya Nair",
    email: "priya@example.com",
    status: "Pending Review",
    bookings: 4,
  },
  {
    name: "Rahul Verma",
    email: "rahul@example.com",
    status: "Suspended",
    bookings: 1,
  },
];

function Users() {
  const navigate = useNavigate();

  const handleViewAsUser = (user) => {
    loginUser({
      email: user.email,
      role: "user",
      name: user.name,
    });

    navigate("/user");
  };

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">User Management</span>
          <h1>Users</h1>
          <p>Review customer accounts, monitor activity, and control access.</p>
        </div>
        <button className="admin-button" type="button">Create User</button>
      </div>

      <div className="admin-stat-grid admin-stat-grid--compact">
        <div className="admin-stat-card"><span>Total Users</span><strong>1,248</strong><small>Across all customer accounts</small></div>
        <div className="admin-stat-card"><span>Active Accounts</span><strong>1,102</strong><small>Ready to book vehicles</small></div>
        <div className="admin-stat-card"><span>Pending Review</span><strong>34</strong><small>Need admin attention</small></div>
      </div>

      <div className="admin-table">
        <div className="admin-table__head admin-table__head--user">
          <span>User</span><span>Status</span><span>Action</span>
        </div>
        {users.map((user) => (
          <div key={user.email} className="admin-table__row admin-table__row--user">
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <div>
              <span className="admin-status">{user.status}</span>
              <p>{user.bookings} bookings</p>
            </div>
            <button
              className="admin-button"
              type="button"
              onClick={() => handleViewAsUser(user)}
            >
              View Dashboard
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
