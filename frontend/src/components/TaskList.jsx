import  { useState } from "react";
import API from "../utils/api";

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, refreshTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const updateTask = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      title: editedTitle || task.title,
      description: editedDescription || task.description,
      status: task.status,
    });
    setEditingTask(null);
    refreshTasks();
  };

  const updateTaskStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    refreshTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refreshTasks();
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 border-yellow-300 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "Completed":
        return "bg-green-100 border-green-300 text-green-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  return (
    <ul className="space-y-4 mt-3">
      <h1 className="flex justify-center text-blue-800">TASK LIST</h1>
      {tasks.map((task) => (
        <li
          key={task._id}
          className={`p-4 border rounded shadow ${getStatusClass(task.status)}`}
        >
          {editingTask === task._id ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit Title"
                className="block w-full p-2 mb-2 border rounded"
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Edit Description"
                className="block w-full p-2 mb-2 border rounded"
              ></textarea>
              <button
                onClick={() => updateTask(task)}
                className="px-4 py-2 mr-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{task.title} ✏️</h3>
                <p>{task.description}</p>
                <p className="text-sm">🕒 Created At: {new Date(task.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task._id, e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="Pending">Pending ⌛</option>
                  <option value="In Progress">In Progress 🔄</option>
                  <option value="Completed">Completed ✅</option>
                </select>
                <button
                  onClick={() => setEditingTask(task._id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit 🖊️
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete 🗑️
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
