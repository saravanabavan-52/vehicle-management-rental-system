import { Navigate } from "react-router-dom";
import { getHomePathByRole, getRole, isAuthenticated } from "../utils/auth";

function ProtectedRoute({ children, role }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && getRole() !== role) {
    return <Navigate to={getHomePathByRole(getRole())} replace />;
  }

  return children;
}

export default ProtectedRoute;
