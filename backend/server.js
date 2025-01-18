require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const usersRouters = require("./routes/userRoutes");
const quranRouters = require("./routes/quranRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/api/auth", require("./routes/auth")); // Routes
// app.use("/api/private", require("./routes/private")); // Routes
app.use("/api/v1/users", usersRouters); // Routes
app.use("/api/v1/quran", quranRouters); // Routes

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
    process.exit(1);
  }
});
