import { NavLink } from "react-router-dom";
import { getRole } from "../utils/auth";
import { ROLES } from "../utils/roles";
import "./Sidebar.css";

const userLinks = [
  { to: "/user", label: "Dashboard", end: true },
  { to: "/user/profile", label: "Profile" },
  { to: "/user/bookings", label: "Bookings" },
  { to: "/user/payments", label: "Payments" },
  { to: "/user/reviews", label: "Reviews" },
  { to: "/user/notifications", label: "Notifications" },
];

const ownerLinks = [
  { to: "/owner", label: "Dashboard", end: true },
  { to: "/owner/vehicles", label: "Vehicles" },
  { to: "/owner/calendar", label: "Availability" },
  { to: "/owner/booking-requests", label: "Requests" },
  { to: "/owner/earnings", label: "Earnings" },
];

const adminLinks = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/users", label: "Users" },
  { to: "/admin/owners", label: "Owners" },
  { to: "/admin/vehicles", label: "Vehicles" },
  { to: "/admin/bookings", label: "Bookings" },
  { to: "/admin/payments", label: "Payments" },
  { to: "/admin/reports", label: "Reports" },
  { to: "/admin/settings", label: "Settings" },
];

function renderLinks(links) {
  return links.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.end}
      className={({ isActive }) =>
        isActive ? "sidebar-link active" : "sidebar-link"
      }
    >
      {link.label}
    </NavLink>
  ));
}

function Sidebar() {
  const role = getRole();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      {role === ROLES.USER && renderLinks(userLinks)}
      {role === ROLES.OWNER && renderLinks(ownerLinks)}
      {role === ROLES.ADMIN && renderLinks(adminLinks)}
    </div>
  );
}

export default Sidebar;
