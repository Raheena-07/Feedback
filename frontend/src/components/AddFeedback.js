import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { addFeedback } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddFeedback() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;

    const newFeedback = {
      courseId: form.courseId.value,
      courseName: form.courseName.value,
      courseDuration: form.courseDuration.value,
      comments: form.comments.value,
      rating: Number(form.rating.value),
    };

    try {
      await addFeedback(newFeedback);
      setSuccess("Feedback added successfully!");
      form.reset();
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to add feedback");
    }
  };

  return (
    <Card className="card-custom p-3">
      <Card.Body>
        <Card.Title>Add Feedback</Card.Title>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={submitForm}>
          <Form.Group className="mb-2">
            <Form.Label>Course ID</Form.Label>
            <Form.Control name="courseId" placeholder="e.g., CS101" required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Course Name</Form.Label>
            <Form.Control name="courseName" required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control name="courseDuration" placeholder="e.g., 6 weeks" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Comments</Form.Label>
            <Form.Control name="comments" as="textarea" rows="3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating (0–5)</Form.Label>
            <Form.Control type="number" name="rating" min="0" max="5" defaultValue="5" />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
