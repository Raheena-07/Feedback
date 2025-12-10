import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// GET all feedbacks
export const getFeedbacks = async () => {
  const res = await API.get("/feedbacks");
  return res.data;
};

// Add feedback
export const addFeedback = async (data) => {
  const res = await API.post("/feedbacks", data);
  return res.data;
};

// Update feedback
export const updateFeedback = async (id, data) => {
  const res = await API.put(`/feedbacks/${id}`, data);
  return res.data;
};

// Delete feedback
export const deleteFeedback = async (id) => {
  const res = await API.delete(`/feedbacks/${id}`);
  return res.data;
};
