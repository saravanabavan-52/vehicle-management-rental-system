import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="page-wrap">
      <div className="info-card mx-auto" style={{ maxWidth: 560 }}>
        <h2 className="page-title">Reset Password</h2>
        <p className="page-subtitle">
          This page is a placeholder for your API integration later.
        </p>
        <ul className="list-clean mt-4">
          <li>Take token from email link</li>
          <li>Show new password form</li>
          <li>Send update request to backend API</li>
        </ul>
        <Link className="btn btn-outline-primary mt-4" to="/login">
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;
