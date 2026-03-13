import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import noticeRoutes from "./routes/notice.js";
import authRoutes from "./routes/auth.js";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(cors());
app.use(express.json());

/*app.get("/api/notices", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Hospital Closed Tomorrow",
      date: "2026-03-10",
      message: "The hospital will remain closed tomorrow due to a public holiday."
    },
    {
      id: 2,
      title: "New COVID-19 Guidelines",
        date: "2026-03-08",
        message: "Please follow the new COVID-19 guidelines issued by the health department."
    },
  ]);
});*/

// example route to test database connection
app.get("/api/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.json({ message: "Database connection successful" });
  } catch (error) {
    res.status(500).json({ message: "Database connection failed", error });
  }
});

// routes
app.use("/api", noticeRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});