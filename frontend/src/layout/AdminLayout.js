import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AdminLayout.css";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard",  icon: "&#9632;" },
  { to: "/admin/notices",   label: "Notices",    icon: "&#128276;" },
  { to: "/admin/gallery",   label: "Gallery",    icon: "&#128247;" },
  { to: "/admin/doctors",   label: "Doctors",    icon: "&#128105;" },
  { to: "/admin/events",    label: "Events",     icon: "&#128197;" },
];

function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <h2>Mechi Eye Hospital</h2>
          <span>Admin Panel</span>
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <span
                className="admin-nav-icon"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
