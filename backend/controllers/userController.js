const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");

// Register a User

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is a sample ID",
      url: "profilePicURL",
    },
  });

  res.status(200).json({
    success: true,
    user,
  });
});
