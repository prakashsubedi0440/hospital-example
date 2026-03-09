const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/notices", (req, res) => {
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
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});