import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateFeedback } from "../services/api";
import "./EditFeedback.css";

export default function EditFeedback() {
  const navigate = useNavigate();
  const { state } = useLocation(); 

  const [form, setForm] = useState({
    courseId: state.courseId || "",
    courseName: state.courseName || "",
    courseDuration: state.courseDuration || "",
    comments: state.comments || "",
    rating: state.rating || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFeedback(state._id, form);
    alert("Feedback updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <h2>Edit Feedback</h2>

        <form onSubmit={handleSubmit}>
          <label>Course ID</label>
          <input
            type="text"
            name="courseId"
            value={form.courseId}
            onChange={handleChange}
            required
          />

          <label>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={form.courseName}
            onChange={handleChange}
            required
          />

          <label>Course Duration</label>
          <input
            type="text"
            name="courseDuration"
            value={form.courseDuration}
            onChange={handleChange}
            required
          />

          <label>Comments</label>
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleChange}
            rows="4"
            required
          />

          <label>Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />

          <button type="submit" className="update-btn">
            Update Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
