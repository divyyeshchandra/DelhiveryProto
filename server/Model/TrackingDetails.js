const mongoose = require("mongoose");

const db_link =
  "mongodb+srv://divyyeshbvp23:rockz.nishu@rewardscluster.nbanmhm.mongodb.net/ShipmentDB";

mongoose
  .connect(db_link)
  .then((db) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema
const userSchema = mongoose.Schema({
  phoneno: {
    type: String,
    required: true,
    unique: true,
  },
  AWB: {
    type: String,
    required: true,
    unique: true,
  },
  Orderid: {
    type: String,
  },
  LRN: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  CurrentLocation: {
    type: String,
    required: true,
  },
});

//Modal
const userModal = mongoose.model("Trackingcollection", userSchema);

module.exports = userModal;
