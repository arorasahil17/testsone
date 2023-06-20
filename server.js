// server.js

const serverless = require("serverless-http");
const express = require("express");
const app = express();

// Your Express.js app configuration and routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  // Your email sending logic
});

// Export the serverless function
module.exports.handler = serverless(app);
