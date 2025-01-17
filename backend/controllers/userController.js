const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/User");
const {generateToken, generateRefreshToken} = require('../auth/generateToken')
//Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email }); // Check if user already exists
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    user = await User.create({ name, email, password }); // Create User
    // Generate Tokens
    const accessToken = generateToken(user._id);

    res.status(200).json({ success: true, accessToken});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }
    let user = await User.findOne({ email }).select("+password"); // Check if user exists
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await user.matchPassword(password); // Check if password matches
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    // Generate Tokens
    const accessToken = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.status(200).json({success: true,
      data: { accessToken, refreshToken }});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.find(); // Get User Profile
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//Update User Profile


exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if email is being updated
    if (req.body.email && req.body.email !== user.email) {
      const emailExists = await User.findOne({ email: req.body.email });
      if (emailExists) {
        return res
          .status(400)
          .json({ success: false, message: 'Email already in use' });
      }
      user.email = req.body.email;
    }

    // Update name
    if (req.body.name) {
      user.name = req.body.name;
    }

    // Update password
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }

    // Save updates
    await user.save();

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Delete User Profile
exports.deleteUserProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id); // Delete User Profile
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(401).json({ message: 'Refresh token is missing' });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const newAccessToken = generateToken(decoded.id);

    res.status(200).json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
};