const express = require("express");
const postShipDetails = require("../Controller/shipmentController");
const shipRouter = express.Router();
shipRouter.route("/postShipDetails").post(postShipDetails.postShipDetails);
module.exports = { shipRouter };
