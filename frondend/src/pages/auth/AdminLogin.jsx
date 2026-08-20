import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAdmin } from "../../utils/auth";
import { validateEmail, validatePassword } from "../../utils/validators";
import "./Login.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formError =
      validateEmail(formData.email) || validatePassword(formData.password);

    if (formError) {
      setError(formError);
      return;
    }

    try {
      loginAdmin(formData);
      navigate("/admin");
    } catch (loginError) {
      setError(loginError.message);
    }
  };

  return (
    <div className="page-wrap">
      <div className="auth-card mx-auto" style={{ maxWidth: 520 }}>
        <h2 className="mt-4 login">Admin Login</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Admin Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter admin password"
            />
          </div>

          {error ? <div className="alert alert-danger py-2">{error}</div> : null}

          <button className=" saro btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <Link  to="/login">User / Owner Login</Link>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
