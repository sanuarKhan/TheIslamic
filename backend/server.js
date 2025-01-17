require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const usersRouters = require("./routes/userRoutes");
const quranRouters = require("./routes/quranRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
})); // Enable All CORS Requests

// app.use("/api/auth", require("./routes/auth")); // Routes
// app.use("/api/private", require("./routes/private")); // Routes
app.use("/api/v1/users", usersRouters); // Routes
app.use("/api/v1/quran", quranRouters); // Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
