import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import "./OwnerProfile.css";

function Owner() {
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOwnerProfile = async () => {
      try {
        const response = await api.get("/auth/me");

        setOwner(response.data?.user);

      } catch (error) {
        console.error(
          "Owner Profile Error:",
          error.response?.data?.message || error.message
        );

        toast.error(
          error.response?.data?.message ||
          "Unable to load owner profile"
        );

      } finally {
        setLoading(false);
      }
    };

    fetchOwnerProfile();
  }, []);

  if (loading) {
    return (
      <div className="owner-page owner-profile-page">
        <span className="owner-badge">OWNER</span>

        <h1 className="owner-title">
          Owner Profile
        </h1>

        <p className="owner-subtitle">
          Loading your account information...
        </p>
      </div>
    );
  }

  if (!owner) {
    return (
      <div className="owner-page owner-profile-page">
        <span className="owner-badge">OWNER</span>

        <h1 className="owner-title">
          Owner Profile
        </h1>

        <p className="owner-subtitle">
          Unable to load owner information.
        </p>
      </div>
    );
  }

  return (
    <div className="owner-page owner-profile-page">

      <span className="owner-badge">
        OWNER ACCOUNT
      </span>

      <h1 className="owner-title">
        Owner Profile
      </h1>

      <p className="owner-subtitle">
        View your registered owner account information.
      </p>


      {/* Profile Header */}

      <div className="owner-profile-card">

        <div className="owner-avatar">
          {owner.name?.charAt(0).toUpperCase()}
        </div>

        <div className="owner-profile-info">

          <h2>
            {owner.name}
          </h2>

          <p>
            {owner.email}
          </p>

          <span className="owner-status owner-status--active">
            {owner.role?.toUpperCase() || "OWNER"}
          </span>

        </div>

      </div>


      {/* Account Information */}

      <div className="owner-table-wrap">

        <table className="owner-table">

          <tbody>

            <tr>
              <th>Name</th>

              <td>
                {owner.name || "Not available"}
              </td>
            </tr>


            <tr>
              <th>Email</th>

              <td>
                {owner.email || "Not available"}
              </td>
            </tr>


            <tr>
              <th>Role</th>

              <td>
                <span className="owner-status owner-status--active">
                  {owner.role || "owner"}
                </span>
              </td>
            </tr>


            <tr>
             
            </tr>


            <tr>
              

              <td>
                <span className="owner-status owner-status--active">
                  Active
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Owner;