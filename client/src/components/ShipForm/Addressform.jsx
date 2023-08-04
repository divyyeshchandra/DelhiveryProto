import React from "react";

export default function AddressForm({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Street/Colony"
        value={formData.streetColony}
        onChange={(e) => {
          setFormData({ ...formData, streetColony: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Landmark"
        value={formData.landmark}
        onChange={(e) => {
          setFormData({ ...formData, landmark: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Pin Code"
        value={formData.pincode}
        onChange={(e) => {
          setFormData({ ...formData, pincode: e.target.value });
        }}
      />
    </div>
  );
}
