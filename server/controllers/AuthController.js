const UserData = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }
    try {
        const existingUserByEmail = await UserData.findOne({ email });
        if (existingUserByEmail) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const existingUserByName = await UserData.findOne({ name });
        if (existingUserByName) {
            return res.status(400).json({ message: "Name already taken" });
        }
        const hashPwd = await bcrypt.hash(password, 10);
        const newUser = new UserData({ name, email, phone, password: hashPwd });
        const savedUser = await newUser.save();

     
        return res.status(201).json({ message: "User Created", user: savedUser });
    } catch (error) {
        console.error("Error in user registration:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).send({ message: "All fields are mandatory" });
    }
    try {
        const user = await UserData.findOne({ email });
        console.log(user)

        if (!user) {
            return res.status(400).send({ message: "Email is not registered" });
        }
        const isPasswordValid =  bcrypt.compare(password, user.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const payload = { id: user._id, email: user.email,name:user.name};
        console.log(payload);
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        console.log(token)
        return res.json({ message: "User Logged In Successfully", token});
    } catch (error) {
        console.error("Error in user login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { register, login };
