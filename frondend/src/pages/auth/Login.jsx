import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
import { loginUser, getHomePathByRole } from "../../utils/auth";
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validators";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const roleError = validateRequired(formData.role, "Role");
    const formError = emailError || passwordError || roleError;

    if (formError) {
      setError(formError);
      toast.error(formError);
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      const { user, token } = response.data;

      loginUser({ token, user });

      toast.success("Login Successful");

      navigate(getHomePathByRole(user.role));
    } catch (err) {
      const message =
        err.response?.data?.message || "Invalid email or password";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="page-wrap">
      <div className="auth-card mx-auto" style={{ maxWidth: "520px" }}>
        <h2 className="mt-4 login">Login</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-3">
            <label>Login As</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="owner">Owner</option>
            </select>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <Link to="/register">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;