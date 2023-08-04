const express = require("express");
const getTrackingDetails = require("../Controller/trackingController");
const trackRouter = express.Router();
trackRouter
  .route("/getTrackingDetails")
  .get(getTrackingDetails.getTrackingDetails);

module.exports = { trackRouter };
