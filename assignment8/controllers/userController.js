const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const  {validateForPost, validateForPut, validateForDelete} = require("./validators");

//@desc  Get all users
//@route GET /user/getAll
//@access public
const getUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

//@desc  create users
//@route POST /user/create
//@access public
const createUser = asyncHandler(async (req, res) => {
    if(!req.body.fullName || !req.body.password || !req.body.email){
        res.status(400)
        return res.json({"message": "All fields are mandatory !"})
    }

    let validator = validateForPost(req.body);
    let salt = bcrypt.genSaltSync(10);
    if(validator.message==true) {
        try {
            userRec = {
                "fullName": req.body.fullName,
                "email": req.body.email,
                "password": await bcrypt.hash(req.body.password, salt)
            }
            await User.create(
                userRec
            );
            res.json(userRec);
        }
        catch(err) {
            res.status(500)
            return res.json({"message": err})
        }
    }
    else {
        res.json(validator);
    }
    
    res.status(200).json(user)
})

//@desc  update users
//@route PUT /user/edit
//@access public
const updateUser = asyncHandler(async (req, res) => {
    if(!req.body.email){
        res.status(400)
        return res.json({"message": "Email is mandotory !"})
    }

    let validator = validateForPut(req.body);
    let salt = bcrypt.genSaltSync(10);
    if(validator.message==true) {
        try {
            let findValue = await User.findOne(
                {email: req.body.email}
            );
            if (!findValue){
                res.status(400)
                return res.json({"message":"Not found !"})
            }

             try {
                await User.findOneAndUpdate(
                    {
                        email: findValue.email
                    },
                    {
                        fullName: req.body.fullName,
                        password: await bcrypt.hash(req.body.password, salt)
                    }
                );
                res.json({message:"Updated  email: "+findValue.email+" in the database"})
            }
            catch(err) {
                res.status(400)
                return res.json({"message": "Error occured updating data in database"})
            }
        }
        catch(err) {
            throw new Error(err)
        }
    }
    else {
        res.json(validator);
    }
    
})

//@desc  delete users
//@route DELETE /user/delete
//@access public
const deleteUser = asyncHandler(async (req, res) => {
    if(!req.body.email){
        res.status(400)
        throw new Error("email is mandatory !")
    }

    {
        let validator = validateForDelete(req.body.email);
        if(validator.message==true) {
            try {
                let findValue = await User.findOne(
                    {email: req.body.email}
                );
                if(findValue) {
                    await User.deleteOne({
                        email: findValue.email
                    });
                    res.json({message:"Deleted first occurancewith email: "+findValue.email+" from DB"});
                }
                else {
                    res.status(400)
                    return res.json({"message": "Email Id Not found"})
                }
            }
            catch(err) {
                res.status(500)
                return res.json({"message": err})
            }
        }
        else {
            res.json(validator);
        }
    }

    })

module.exports = { getUser, createUser, updateUser, deleteUser }