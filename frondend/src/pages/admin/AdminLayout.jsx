import { NavLink, Outlet } from "react-router-dom";
import "./Admin.css";

function AdminLayout() {
  const adminMenu = [
    { to: "/admin", label: "Dashboard", end: true },
    { to: "/admin/bookings", label: "Bookings" },
    { to: "/admin/owners", label: "Owners" },
    { to: "/admin/payments", label: "Payments" },
    { to: "/admin/reports", label: "Reports" },
    { to: "/admin/settings", label: "Settings" },
    { to: "/admin/users", label: "Users" },
    { to: "/admin/vehicles", label: "Vehicles" },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div>
          <p className="admin-sidebar__eyebrow">Vehicle Rental</p>
          <h2 className="admin-sidebar__title">Admin Panel</h2>
        </div>

        <nav className="admin-sidebar__nav">
          {adminMenu.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "admin-sidebar__link active" : "admin-sidebar__link"
              }
              end={item.end}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="admin-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
