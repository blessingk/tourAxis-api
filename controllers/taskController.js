const Task = require('../models/taskModel');

const createTask = async (req, res) => {
  try {
    const taskData = { ...req.body, user: req.params.user_id };
    const task = await Task.create(taskData);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.task_id, user: req.params.user_id },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.task_id,
      user: req.params.user_id,
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.task_id,
      user: req.params.user_id,
    });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.params.user_id });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTasksByUser,
};
