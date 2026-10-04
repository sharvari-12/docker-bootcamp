const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const STUDENT_NAME = process.env.STUDENT_NAME || "Docker Student";
const BRANCH = process.env.BRANCH || "Computer Engineering";
const APP_ENV = process.env.APP_ENV || "Development";

app.use(express.static(path.join(__dirname)));

app.get("/config", (req, res) => {
  res.json({
    student: STUDENT_NAME,
    branch: BRANCH,
    environment: APP_ENV,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`👨‍🎓 Student: ${STUDENT_NAME}`);
  console.log(`🌍 Environment: ${APP_ENV}`);
});