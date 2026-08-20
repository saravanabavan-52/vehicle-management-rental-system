import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
import './Register.css'
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validators";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    const formError =
      validateRequired(formData.name, "Name") ||
      validateEmail(formData.email) ||
      validatePassword(formData.password) ||
      validateRequired(formData.role, "Role");

    if (formError) {
      setError(formError);
      toast.error(formError);
      return;
    }

    try {
      const response = await api.post("/auth/register", formData);

      toast.success(response.data.message || "Registration Successful");
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration Failed";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="page-wrap">
      <div className="auth-card mx-auto" style={{ maxWidth: "520px" }}>
        <h2 className="mt-4">Register</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
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

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="mt-3" >
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;