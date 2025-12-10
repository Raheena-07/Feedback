import React, { useEffect, useState } from "react";
import { getFeedbacks, deleteFeedback } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFeedbacks().then((data) => setFeedbacks(data));
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await deleteFeedback(id);
      setFeedbacks(feedbacks.filter((item) => item._id !== id));
    }
  };


  const handleEdit = (fb) => {
    navigate(`/edit/${fb._id}`, { state: fb });
  };

  const avgRating =
    feedbacks.length > 0
      ? (feedbacks.reduce((a, b) => a + b.rating, 0) / feedbacks.length).toFixed(1)
      : 0;

  return (
    <div className="container">

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="stat-card">
            <p>Total Courses</p>
            <h2>{feedbacks.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card">
            <p>Average Rating</p>
            <h2>{avgRating}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card">
            <p>Total Feedback</p>
            <h2>{feedbacks.length}</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-header">Course Feedback Dashboard</div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Comments</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {feedbacks.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No feedback found. Add new feedback.
                </td>
              </tr>
            )}

            {feedbacks.map((fb) => (
              <tr key={fb._id}>
                <td>{fb.courseId}</td>
                <td>{fb.courseName}</td>
                <td>{fb.courseDuration}</td>
                <td>{fb.comments}</td>
                <td>{fb.rating}</td>
                <td>

                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEdit(fb)}
                  >
                    EDIT
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(fb._id)}
                  >
                    DELETE
                  </button>

                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
}
