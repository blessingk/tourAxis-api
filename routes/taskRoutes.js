const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.post('/:user_id/tasks', TaskController.createTask);
router.put('/:user_id/tasks/:task_id', TaskController.updateTask);
router.delete('/:user_id/tasks/:task_id', TaskController.deleteTask);
router.get('/:user_id/tasks/:task_id', TaskController.getTaskById);
router.get('/:user_id/tasks', TaskController.getTasksByUser);

module.exports = router;