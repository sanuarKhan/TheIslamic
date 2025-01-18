const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  logout,
} = require("../controllers/userController");
const authMiddleware = require("../auth/authMiddleware");

router.route("/register").post(registerUser); // Register User
router.route("/login").post(loginUser); // Login User
router.route("/logout").post(logout); // Logout User
router.route("/profile").get(authMiddleware, getUserProfile); // Get Profile
router.route("/update").put(authMiddleware, updateUserProfile);
router.route("/delete").delete(authMiddleware, deleteUserProfile);

module.exports = router;
