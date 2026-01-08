// EmployeeForm.js
import React from "react";

const Reusable = ({ formData, setFormData, handleSubmit }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={formData.firstname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender_id"
        placeholder="Gender ID"
        value={formData.gender_id}
        onChange={handleChange}
      />
      {/* Add all other inputs similarly */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reusable;
