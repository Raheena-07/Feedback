import React from "react";
import { Button } from "react-bootstrap";

export default function FeedbackRow({ feedback, onDelete, onEdit }) {
  return (
    <tr>
      <td>{feedback.courseId}</td>
      <td>{feedback.courseName}</td>
      <td>{feedback.courseDuration || "-"}</td>
      <td>{feedback.comments || "-"}</td>
      <td>
        <span className="badge bg-primary rating-badge">
          {feedback.rating} / 5
        </span>
      </td>
      <td>
        <Button size="sm" className="me-2" onClick={onEdit}>
          Update
        </Button>
        <Button size="sm" variant="danger" onClick={() => onDelete(feedback._id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}
