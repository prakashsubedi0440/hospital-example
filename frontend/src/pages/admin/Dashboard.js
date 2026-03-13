import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { token } = useAuth();

  // Decode email from JWT payload (without a library)
  const email = token
    ? JSON.parse(atob(token.split(".")[1])).email
    : "";

  return (
    <div className="dashboard-page">
      <div className="dashboard-welcome">
        <h2>Welcome back!</h2>
        <p>Logged in as <strong>{email}</strong></p>
      </div>

      <div className="dashboard-cards">
        <div className="dash-card">
          <div className="dash-card-icon notices-icon">&#128276;</div>
          <div>
            <h4>Notices</h4>
            <p>Add or remove hospital notices</p>
          </div>
        </div>
        <div className="dash-card">
          <div className="dash-card-icon gallery-icon">&#128247;</div>
          <div>
            <h4>Gallery</h4>
            <p>Manage hospital photo gallery</p>
          </div>
        </div>
        <div className="dash-card">
          <div className="dash-card-icon doctors-icon">&#128105;</div>
          <div>
            <h4>Doctors</h4>
            <p>Update doctor profiles and info</p>
          </div>
        </div>
        <div className="dash-card">
          <div className="dash-card-icon events-icon">&#128197;</div>
          <div>
            <h4>Events</h4>
            <p>Post upcoming hospital events</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
