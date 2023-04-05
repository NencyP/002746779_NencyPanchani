const userService = require('../services/userService');

module.exports = {
  async createUser(req, res) {
    try {
      await userService.createUser(req.body);
      res.send('User created successfully');
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },

  async loginUser(req, res) {
    try {
      const result = await userService.loginUser(req.body);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },

  async editUser(req, res) {
    try {
      await userService.editUser(req.body);
      res.send('User updated successfully');
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },

  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.body);
      res.send('User deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },
};
