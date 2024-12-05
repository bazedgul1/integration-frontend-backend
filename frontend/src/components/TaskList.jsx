// import React from "react";
import API from "../utils/api";

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, refreshTasks }) => {
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refreshTasks();
  };

  return (
    <ul className="p-4 bg-blue-600 mt-2">
      {tasks.map((task) => (
        <li key={task._id} className="mb-2 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <div className="mt-2">
            <button
              onClick={() => deleteTask(task._id)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
