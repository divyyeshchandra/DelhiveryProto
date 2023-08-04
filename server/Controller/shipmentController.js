const { default: axios } = require("axios");
const userModal1 = require("../Model/ShipmetnModel");
const userModal2 = require("../Model/TrackingDetails");

const postShipDetails = async (req, res) => {
  // let data = await userModal1.create(req.body);
  const phone = await req.body.phoneno;
  const str = await req.body.email;
  const AWB = await str.slice(0, 3);
  const Orderid = await str.slice(4, 7);
  console.log(Orderid);
  const LRN = await str.slice(8, 11);
  const Location = await req.body.streetColony;
  const landmark = await req.body.landmark;
  const pincode = await req.body.pincode;
  const currentLocation = "Delhi Warehouse";
  let trackingData = {
    phoneno: phone,
    AWB: AWB,
    orderid: Orderid,
    LRN: LRN,
    Location: Location,
    landmark: landmark,
    pincode: pincode,
    CurrentLocation: currentLocation,
  };
  let data1 = await userModal2.create(trackingData);
  console.log(data1);
};

module.exports = { postShipDetails };
