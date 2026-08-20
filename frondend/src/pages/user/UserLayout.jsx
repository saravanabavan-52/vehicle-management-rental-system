import { NavLink, Outlet } from "react-router-dom";
import "./UserLayout.css";

const userMenu = [
  { to: "/user", label: "Dashboard", end: true },
  { to: "/user/bookings", label: "Bookings" },
  { to: "/user/payments", label: "Payments" },
  { to: "/user/reviews", label: "Reviews" },
  { to: "/user/profile", label: "Profile" },
];

function UserLayout() {
  return (
    <div className="user-layout">
      <aside className="user-sidebar">
        <h2 className="user-sidebar__title">User Menu</h2>
        <nav className="user-sidebar__nav">
          {userMenu.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "user-sidebar__link active" : "user-sidebar__link"
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

      <main className="user-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
