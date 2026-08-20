import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import Bookings from "../pages/user/Bookings";
import Payments from "../pages/user/Payments";
import Reviews from "../pages/user/Reviews";
import Notifications from "../pages/user/Notifications";
import UserLayout from "../pages/user/UserLayout";
import OwnerDashboard from "../pages/owner/Dashboard";
import Vehicles from "../pages/owner/Vehicles";
import Calendar from "../pages/owner/Calendar";
import BookingRequests from "../pages/owner/BookingRequests";
import Earnings from "../pages/owner/Earnings";
import OwnerProfile from "../pages/owner/Owner";
import OwnerLayout from "../pages/owner/OwnerLayout";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Owners from "../pages/admin/Owners";
import AdminVehicles from "../pages/admin/Vehicles";
import AdminBookings from "../pages/admin/Bookings";
import AdminPayments from "../pages/admin/Payments";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import AdminLogin from "../pages/auth/AdminLogin";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import HomePage from "./HomePage";
 
import axios from "axios";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      <Route
        path="/owner"
        element={
          <ProtectedRoute role="owner">
            <OwnerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<OwnerDashboard />} />
        <Route path="owner" element={<OwnerProfile />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="booking-requests" element={<BookingRequests />} />
        <Route path="earnings" element={<Earnings />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="owners" element={<Owners />} />
        <Route path="vehicles" element={<AdminVehicles />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
