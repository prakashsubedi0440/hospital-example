import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

const cards = [
  { to: "/admin/notices", label: "Notices",  desc: "Add or remove hospital notices",    icon: "&#128276;", className: "notices-icon" },
  { to: "/admin/gallery", label: "Gallery",  desc: "Manage hospital photo gallery",     icon: "&#128247;", className: "gallery-icon" },
  { to: "/admin/doctors", label: "Doctors",  desc: "Update doctor profiles and info",   icon: "&#128105;", className: "doctors-icon" },
  { to: "/admin/events",  label: "Events",   desc: "Post upcoming hospital events",     icon: "&#128197;", className: "events-icon"  },
];

function Dashboard() {
  const { token } = useAuth();
  const navigate = useNavigate();

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
        {cards.map((card) => (
          <div className="dash-card" key={card.to} onClick={() => navigate(card.to)}>
            <div
              className={`dash-card-icon ${card.className}`}
              dangerouslySetInnerHTML={{ __html: card.icon }}
            />
            <div>
              <h4>{card.label}</h4>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
