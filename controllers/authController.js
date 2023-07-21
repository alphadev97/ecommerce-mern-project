import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validation
    if (!name) {
      return res.send({ error: "Name Is Required!" });
    }
    if (!email) {
      return res.send({ error: "Email Is Required!" });
    }
    if (!password) {
      return res.send({ error: "Password Is Required!" });
    }
    if (!phone) {
      return res.send({ error: "Phone Number Is Required!" });
    }
    if (!address) {
      return res.send({ error: "Address Is Required!" });
    }

    // Check User
    const existingUser = await userModel.findOne({ email });

    // Existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered, please login",
      });
    }

    // Register User
    const hashedPassword = await hashPassword(password);

    // Save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
