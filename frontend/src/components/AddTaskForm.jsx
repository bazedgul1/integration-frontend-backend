import  { useState } from "react";
import API from "../utils/api";

// eslint-disable-next-line react/prop-types
const AddTaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Task title is required");

    await API.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
