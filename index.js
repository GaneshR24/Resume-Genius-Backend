require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { db } = require("./db/db");
db();

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/userRoute");

app.use("/api/user/", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our Resume Genius Application!");
});

const PORT = process.env.PORT || 27001;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
