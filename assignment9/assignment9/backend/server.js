const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;
//const salt = 10;


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/trailDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Define user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`]).{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number',
    },
  },
});

// Define user model
const User = mongoose.model('User', userSchema);

// Middleware for parsing JSON request bodies
app.use(express.json());

// User creation API endpoint
app.post('/user/create', async (req, res) => {
  try {
    // Create a new user from the request body
    const user = new User(req.body);
    // Hash the password using bcrypt
    user.password = await bcrypt.hash(user.password, 10);
    // Save the user to the database
    await user.save();
    res.send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

app.post('/user/login', function (req, res) {
  console.log("Calling Login API");

  var useremail = req.body.email;
  var userpass = req.body.password;

  db.collection('users').findOne({ email: useremail }, function (err, user) {
    if (err) {
      return res.send('Error occurred');
    }

    if (!user) {
      return res.send('User does not exist');
    }

    bcrypt.compare(userpass, user.password, function (err, result) {
      if (err) {
        return res.send('Error occurred');
      }

      if (result === true) {
        return res.send('Login successful');
      } else {
        return res.send('Invalid credentials');
      }
   });
  });
});

//User Checking api


// User update API endpoint
app.put('/user/edit', async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error('User not found');
    }
    // Update the user's full name and password
    if (req.body.fullName) {
      user.fullName = req.body.fullName;
    }
    if (req.body.password && req.body.password.length >= 8) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }
    // Save the updated user to the database
    await user.save();
    res.send('User updated successfully');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

// User deletion API endpoint
app.delete('/user/delete', async (req, res) => {
  try {
    // Find and delete the user by email
    const result = await User.deleteOne({ email: req.body.email });
    if (result.deletedCount === 0) {
      throw new Error('User not found');
    }
    res.send('User deleted successfully');
} catch (error) {
console.error(error);
res.status(400).send(error.message);
}
});

// Get all users API endpoint
app.get('/user/getAll', async (req, res) => {
try {
// Find all users and return only their full name, email, and password fields
const users = await User.find({}, { fullName: 1, email: 1, password: 1, _id: 0 });
res.send(users);
} catch (error) {
console.error(error);
res.status(400).send(error.message);
}
});

// Start the server
app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`);
});
