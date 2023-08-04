import React from "react";

export default function Pincodeform({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone Number..."
        value={formData.phoneno}
        onChange={(event) =>
          setFormData({ ...formData, phoneno: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Pickup Pincode"
        value={formData.pickuppincode}
        onChange={(event) =>
          setFormData({ ...formData, pickuppincode: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Delivery Pincode"
        value={formData.deliverypincode}
        onChange={(event) =>
          setFormData({ ...formData, deliverypincode: event.target.value })
        }
      />
    </div>
  );
}
