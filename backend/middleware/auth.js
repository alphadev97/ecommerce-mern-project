const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
});
