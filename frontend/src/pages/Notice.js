import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Notice.css";

function Notice() {
  const [openId, setOpenId] = useState(null);

  const { data: notices = [], isLoading, isError } = useQuery({
    queryKey: ["notices"],
    queryFn: () =>
      axios.get(`${process.env.REACT_APP_API_URL}/api/notices`).then(res => res.data),
  });

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  if (isLoading) return <div className="notice-status">Loading notices...</div>;
  if (isError) return <div className="notice-status error">Failed to load notices. Please try again later.</div>;

  return (
    <div className="notice-page">
      <div className="notice-hero">
        <h1>Notices & Announcements</h1>
        <p>Stay updated with the latest news and information from our hospital.</p>
      </div>

      <div className="notice-container">
        {notices.length === 0 ? (
          <p className="notice-empty">No notices available at this time.</p>
        ) : (
          notices.map(notice => {
            const isOpen = openId === notice._id;
            return (
              <div
                className={`notice-card ${isOpen ? "notice-card--open" : ""}`}
                key={notice._id}
                onClick={() => toggle(notice._id)}
              >
                <div className="notice-card-header">
                  <h3>{notice.title}</h3>
                  <div className="notice-card-right">
                    <span className="notice-date">
                      {new Date(notice.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="notice-chevron">{isOpen ? "▲" : "▼"}</span>
                  </div>
                </div>

                {isOpen && (
                  <p className="notice-content">{notice.content}</p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Notice;
