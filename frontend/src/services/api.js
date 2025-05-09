import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/tasks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getAllTasks() {
    return api.get("/");
  },
  createTask(task) {
    return api.post("/", task);
  },
  updateTask(id, task) {
    return api.put(`/${id}`, task);
  },
  deleteTask(id) {
    return api.delete(`/${id}`);
  },
};
