const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

module.exports = router;