const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

exports.loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: 'User does not exist' };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: 'Invalid credentials' };
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

exports.updateUser = async (email, fullName, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: 'User not found' };
    }
    if (fullName) {
      user.fullName = fullName;
    }
    if (password && password.length >= 8) {
      user.password = await bcrypt.hash(password, 10);
    }
    await user.save();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

exports.deleteUser = async (email) => {
  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount === 0) {
      return { error: 'User not found' };
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

exports.getAllUsers = async () => {
  try {
    const users = await User.find({}, { fullName: 1, email: 1, password: 1, _id: 0 });
    return { users };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
