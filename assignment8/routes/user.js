const express = require('express')
const router = express.Router()

const { getUser, createUser, updateUser, deleteUser } = require('../controllers/userController')

router.route("/getAll").get(getUser)

router.route("/create").post(createUser)

router.route("/edit").put(updateUser)

router.route("/delete").delete(deleteUser)

module.exports = router