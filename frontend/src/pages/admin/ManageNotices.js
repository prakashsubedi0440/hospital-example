import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./ManageNotices.css";

const API = process.env.REACT_APP_API_URL;

function ManageNotices() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  const { data: notices = [], isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: () => axios.get(`${API}/api/notices`).then(res => res.data),
  });

  const addMutation = useMutation({
    mutationFn: (data) => axios.post(`${API}/api/notices`, data, authHeader),
    onSuccess: () => {
      queryClient.invalidateQueries(["notices"]);
      setTitle("");
      setContent("");
      setFormError("");
    },
    onError: (err) => {
      setFormError(err.response?.data?.message || "Failed to add notice.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API}/api/notices/${id}`, authHeader),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries(["notices"]);
      if (selectedId === id) setSelectedId(null);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setFormError("Both title and content are required.");
      return;
    }
    addMutation.mutate({ title, content });
  };

  const selectedNotice = notices.find(n => n._id === selectedId);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric",
    });

  return (
    <div className="manage-notices-page">

      {/* Header */}
      <div className="admin-page-header">
        <button className="admin-back-btn" onClick={() => navigate("/admin/dashboard")}>
          &#8592; Back
        </button>
        <h2 className="admin-page-title">Manage Notices</h2>
      </div>

      {/* Add Notice Form */}
      <div className="admin-card">
        <h4>Add New Notice</h4>
        {formError && <div className="admin-form-error">{formError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Free Eye Camp on 20th March"
            />
          </div>
          <div className="admin-form-group">
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Write the notice details here..."
            />
          </div>
          <button
            className="admin-btn-primary"
            type="submit"
            disabled={addMutation.isPending}
          >
            {addMutation.isPending ? "Adding..." : "Add Notice"}
          </button>
        </form>
      </div>

      {/* Notices two-panel */}
      <div className="admin-card">
        <h4>All Notices</h4>
        {isLoading ? (
          <p className="admin-loading">Loading...</p>
        ) : notices.length === 0 ? (
          <p className="admin-empty">No notices yet.</p>
        ) : (
          <div className="notices-panel">

            {/* Left: list */}
            <ul className="notices-panel-list">
              {notices.map((notice) => (
                <li
                  key={notice._id}
                  className={`notices-panel-item ${selectedId === notice._id ? "notices-panel-item--active" : ""}`}
                  onClick={() => setSelectedId(notice._id)}
                >
                  <strong>{notice.title}</strong>
                  <span>{formatDate(notice.date)}</span>
                </li>
              ))}
            </ul>

            {/* Right: detail */}
            <div className="notices-panel-detail">
              {selectedNotice ? (
                <>
                  <div className="notices-detail-header">
                    <div>
                      <h3>{selectedNotice.title}</h3>
                      <span className="notices-detail-date">{formatDate(selectedNotice.date)}</span>
                    </div>
                    <button
                      className="admin-btn-delete"
                      onClick={() => deleteMutation.mutate(selectedNotice._id)}
                      disabled={deleteMutation.isPending}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="notices-detail-content">{selectedNotice.content}</p>
                </>
              ) : (
                <p className="notices-detail-placeholder">Select a notice to view details.</p>
              )}
            </div>

          </div>
        )}
      </div>

    </div>
  );
}

export default ManageNotices;
