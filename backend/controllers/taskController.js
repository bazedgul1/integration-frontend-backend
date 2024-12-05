import Task from "../models/Task.model.js";
import ApiSuccess from "../utils/ApiSuccess.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// Add a new task
export const addTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title) throw new ApiError("Task title is required", 400);

  const task = await Task.create({ title, description });
  res.status(201).json(new ApiSuccess("Task added successfully", task));
});

// Get all tasks
export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(new ApiSuccess("Tasks retrieved successfully", tasks));
});

// Update a task by ID
export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

  if (!task) throw new ApiError("Task not found", 404);
  res.status(200).json(new ApiSuccess("Task updated successfully", task));
});

// Delete a task by ID
export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);

  if (!task) throw new ApiError("Task not found", 404);
  res.status(200).json(new ApiSuccess("Task deleted successfully", null));
});
