import React, { useState } from "react";
import Pincodeform from "./Pincodeform";
import AddressForm from "./Addressform";
import axios from "axios";

export default function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phoneno: "",
    pickuppincode: "",
    deliverypincode: "",
    firstName: "",
    lastName: "",
    streetColony: "",
    landmark: "",
    pincode: "",
  });

  const FormTitles = ["Pincode", "Address"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Pincodeform formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressForm formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/postShipDetails", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div style={{ width: page === 0 ? "50%" : "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit();
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
