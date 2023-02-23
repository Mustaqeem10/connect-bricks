const express = require("express");
require("dotenv").config();
const cors = require('cors')
const authRouter = require('./routes/auth-router')

const { DEV_PORT } = process.env;

const app = express();

// Middlewares
// This middleware allows CROSS ORIGIN RESOURCE SHARING
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json());    // This middleware parses incoming requests with JSON payloads

app.use("/api/auth", authRouter)

app.listen(DEV_PORT, () => {
  console.log(`Server listening on port ${DEV_PORT}`);
});
