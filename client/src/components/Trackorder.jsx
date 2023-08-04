import React, { useState } from "react";
import axios from "axios";

export default function Trackorder() {
  const [mobileNo, setMobileNo] = useState("");
  const [AWB, setAWB] = useState("");
  const [OrderID, setOrderID] = useState("");
  const [LRN, setLRN] = useState("");

  const handleSubmit = () => {
    if (mobileNo) {
      axios
        .get("http://localhost:3000/getTrackingDetails", {
          params: {
            phoneno: mobileNo,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } else if (AWB.length == 3) {
      axios
        .get("http://localhost:3000/getTrackingDetails", {
          params: {
            AWB: AWB,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } else if (OrderID.length == 3) {
      axios
        .get("http://localhost:3000/getTrackingDetails", {
          params: {
            OrderID: OrderID,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } else if (LRN.length == 3) {
      axios
        .get("http://localhost:3000/getTrackingDetails", {
          params: {
            LRN: LRN,
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className="trackordermain">
      <div className="box">
        <h3 className="text1">Track Order</h3>
        <h className="textput">Put any of the valid value</h>
        <h4 className="text3">Mobile</h4>
        <input
          className="inputbox1"
          onChange={(event) => setMobileNo(event.target.value)}
        />
        <h4 className="text4">AWB</h4>
        <input
          className="inputbox1"
          onChange={(event) => setAWB(event.target.value)}
        />
        <h4 className="text5">OrderId</h4>
        <input
          className="inputbox1"
          onChange={(event) => setOrderID(event.target.value)}
        />
        <h4 className="text6">LRN</h4>
        <input
          className="inputbox1"
          onChange={(event) => setLRN(event.target.value)}
        />
        <button className="submitbutton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
