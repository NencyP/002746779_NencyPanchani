const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

const validatePassword = (password) => {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
};
  
const validateFullName = (fullName) => {
    var re = /^[a-zA-Z ]{2,30}$/;
    return re.test(fullName);
};

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Fullname is required"],
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)