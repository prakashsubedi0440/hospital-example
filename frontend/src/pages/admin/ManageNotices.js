import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./ManageNotices.css";

const API = process.env.REACT_APP_API_URL;

function ManageNotices() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  // Fetch notices
  const { data: notices = [], isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: () => axios.get(`${API}/api/notices`).then(res => res.data),
  });

  // Add notice
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

  // Delete notice
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API}/api/notices/${id}`, authHeader),
    onSuccess: () => queryClient.invalidateQueries(["notices"]),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setFormError("Both title and content are required.");
      return;
    }
    addMutation.mutate({ title, content });
  };

  return (
    <div className="manage-notices-page">
      <h2 className="admin-page-title">Manage Notices</h2>

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

      {/* Notices List */}
      <div className="admin-card">
        <h4>All Notices</h4>
        {isLoading ? (
          <p className="admin-loading">Loading...</p>
        ) : notices.length === 0 ? (
          <p className="admin-empty">No notices yet.</p>
        ) : (
          <ul className="admin-notice-list">
            {notices.map((notice) => (
              <li key={notice._id} className="admin-notice-item">
                <div className="admin-notice-info">
                  <strong>{notice.title}</strong>
                  <span className="admin-notice-date">
                    {new Date(notice.date).toLocaleDateString("en-US", {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </span>
                  <p>{notice.content}</p>
                </div>
                <button
                  className="admin-btn-delete"
                  onClick={() => deleteMutation.mutate(notice._id)}
                  disabled={deleteMutation.isPending}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ManageNotices;
