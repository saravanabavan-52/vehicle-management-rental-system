import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, getRole, logout } from "../utils/auth";
import "./Navbar.css";




function Navbar() {
  const navigate = useNavigate();
  const auth = isAuthenticated();
  const role = getRole();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="VMS home">
        <span className="logo-mark">V</span>
        <span>
          VMS
          <small>Rental</small>
        </span>
      </Link>

      <div className="nav-links" aria-label="Main navigation">
        <NavLink to="/" className="nav-btn">Home</NavLink>
        <a href="/#vehicles" className="nav-btn">Vehicles</a>
        <a href="/#bookings" className="nav-btn">Bookings</a>

        {!auth && (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/admin-login" className="nav-btn nav-btn--subtle">Admin</Link>
            <Link to="/register" className="nav-btn highlight">Register</Link>
          </>
        )}

        {auth && role === "user" && (
          <>
            <Link to="/user" className="nav-btn">Dashboard</Link>
            <Link to="/user/bookings" className="nav-btn">Bookings</Link>
          </>
        )}

        {auth && role === "owner" && (
          <>
            <Link to="/owner" className="nav-btn">Dashboard</Link>
            <Link to="/owner/vehicles" className="nav-btn">Vehicles</Link>
          </>
        )}

        {auth && role === "admin" && (
          <>
            <Link to="/admin" className="nav-btn">Dashboard</Link>
            <Link to="/admin/users" className="nav-btn">Users</Link>
          </>
        )}

        {auth && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
