import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import {config} from "dotenv";
import jwt from "jsonwebtoken";

config();
const transporter = nodemailer.createTransport({
  direct: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONFIRMED_EMAIL,
    pass: process.env.CONFIRMED_EMAIL_PASSWORD,
  },
});
// console.log(process.env.CONFIRMED_EMAIL, process.env.CONFIRMED_EMAIL_PASSWORD)

export let userController = {
  getAll: async (req, res) => {
    const users = await userModel.find();
    res.send(users);
  },
  getById: async (req, res) => {
    let id = req.params.id;
    const user = await userModel.findById(id);
    res.send(user);
  },
  register: async (req, res) => {
    const {username, email, password} = req.body;
    const user = await userModel.find({email: email});
    if (user.length > 0) {
      return res.send("istifadeci artiq var");
    } else {
      let hashpassword = await bcrypt.hash(password, 10);
      console.log(hashpassword);

      let newUser = userModel({
        username,
        email,
        password: hashpassword,
      });
      await newUser.save();
      res.send(newUser);
    }
  },
  login: async (req, res) => {
    let {email, password} = req.body;
    const user = await userModel.findOne({email: email});
    if (!user) {
      return res.send("istifadeci tapilmadi");
    } else {
      let isTruePassword = await bcrypt.compare(password, user.password);
      if (!isTruePassword) {
        res.send("Password is incorrect");
      } else {
        let confirmCode = Math.floor(100000 + Math.random() * 900000);
        user.confirmPassword = confirmCode;
        await user.save();

        const info = await transporter.sendMail({
          from: process.env.CONFIRMED_EMAIL,
          to: user.email,
          subject: "Confirm Your Email",
          text: `Your confirmation code is: ${confirmCode}`,
        });
      }
      res.send(user);
    }
  },
  confirm: async (req, res) => {
    let confirmPassword = req.body.confirmPassword;
    const user = await userModel.findOne({confirmPassword: confirmPassword});
    if (!user) {
      return res.send("confirmation code is incorrect");
    } else {
      let token = jwt.sign(
        {id: user._id, email: user.email},
        process.env.SECRET_KEY,
        {expiresIn: "1h"}
      );
      res.send(`Bearer ${token}`);
    }
  },
};
