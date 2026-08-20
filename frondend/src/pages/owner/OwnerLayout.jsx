import { NavLink, Outlet } from "react-router-dom";
import "./OwnerLayout.css";

const ownerMenu = [
  { to: "/owner", label: "Dashboard", end: true },
  { to: "/owner/booking-requests", label: "Booking Requests" },
  { to: "/owner/calendar", label: "Calendar" },
  { to: "/owner/earnings", label: "Earnings" },
  { to: "/owner/vehicles", label: "Vehicles" },
  { to: "/owner/owner", label: "Owner" },
];

function OwnerLayout() {
  return (
    <div className="owner-layout">
      <aside className="owner-sidebar">
        <h2 className="owner-sidebar__title">Owner Menu</h2>
        <nav className="owner-sidebar__nav">
          {ownerMenu.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "owner-sidebar__link active" : "owner-sidebar__link"
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

      <main className="owner-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerLayout;
