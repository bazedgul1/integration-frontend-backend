import { useEffect, useState } from "react";
import API from "./utils/api";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-8 bg-slate-400">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <AddTaskForm refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} refreshTasks={fetchTasks} />
    </div>
  );
};

export default App;
