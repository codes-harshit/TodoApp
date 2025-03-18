import { User } from "../models/user.model.js";

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide email and password",
    });
  }

  //   const user = { email, password };

  //   await User.create(user);

  return res.status(200).json({
    success: true,
    message: "User signed up successfully",
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
};
