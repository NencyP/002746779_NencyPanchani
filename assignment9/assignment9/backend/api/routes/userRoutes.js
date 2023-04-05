const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/create', userController.createUser);
router.post('/user/login', userController.loginUser);
router.put('/user/edit', userController.editUser);
router.delete('/user/delete', userController.deleteUser);
router.get('/user/getAll', userController.getAllUsers);

module.exports = router;
