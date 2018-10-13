const express = require("express")

// baseRouter controls basic endpoints
const baseRouter = express.Router()

// GET /status is the health check endpoint for this app
baseRouter.get("/status", getStatus)

function getStatus(req, res) {
  return res.send("OK!")
}

module.exports = baseRouter
