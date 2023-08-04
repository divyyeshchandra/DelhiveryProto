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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneno: {
    type: String,
    required: true,
    unique: true,
  },
  pickuppincode: {
    type: String,
    required: true,
    unique: true,
  },
  deliverypincode: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetColony: {
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
});

//Modal
const userModal = mongoose.model("shipmentcollections", userSchema);

module.exports = userModal;
