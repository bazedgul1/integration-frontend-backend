// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description : {
//         type: String,
//         required: true,
//     },
//     status : {
//         type: Boolean,
//         required: true,
//         enum: ["Pending", "In Progress", "Completed"],
//         default: "Pending"
//     }
// }, {timestamps: true})

// const Task = mongoose.Model('User', taskSchema)
// export default Task

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
