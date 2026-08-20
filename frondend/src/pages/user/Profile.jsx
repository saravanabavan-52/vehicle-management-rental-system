import { useEffect, useState } from "react";
import api from "../../api/api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/auth/me");

        setUser(response.data.user);
      } catch (error) {
        console.error(
          "Profile error:",
          error.response?.data?.message || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!user) {
    return <p>Unable to load profile.</p>;
  }

  return (
    <div className="container mt-4">
      <h1>My Profile</h1>

      <h2>User Information</h2>

      <div className="user-table-wrap">
        <table className="user-table">
          <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
                </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;





      

         
      