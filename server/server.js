const express = require("express");
const cors = require("cors");

const shipRoute = require("./Routes/Shipmentroute");
const trackRoute = require("./Routes/Trackingdetailsroute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("", shipRoute.shipRouter);
app.use("", trackRoute.trackRouter);

const start = async () => {
  app.listen(3000, () => {
    console.log("App Started");
  });
};

start();
