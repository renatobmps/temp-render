require("dotenv").config();
const express = require("express");

const message =
  process.env.MESSAGE ?? "No message was found in the environment";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (_, res) => {
  try {
    return res.status(200).json({
      status: "ok",
      message,
    });
  } catch (err) {
    return res.status(500).json({
      status: "ko",
      message: err.message ?? "Error: " + err,
    });
  }
});

app.listen(PORT, console.log("running"));
