const { default: axios } = require("axios");
const userModal1 = require("../Model/ShipmetnModel");
const userModal2 = require("../Model/TrackingDetails");

const getTrackingDetails = async (req, res) => {
  let obj = req.query;
  const Query2 = Object.values(obj)[0];
  const Query1 = Object.keys(obj)[0];
  // const allDetails = await userModal2.find({
  //   Query1: `${Query2}`,
  // });
  // console.log(allDetails);
  // res.json({
  //   Message: "List of all users",
  // });
};

module.exports = { getTrackingDetails };
