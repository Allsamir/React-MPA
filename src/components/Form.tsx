import React, { ChangeEvent } from "react";
import { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id=""
          onChange={handleOnChange}
          value={formData.email}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        <span style={{ fontWeight: "bold" }}>Name:</span> {formData.name}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Email:</span> {formData.email}
      </p>
    </>
  );
};

export default Form;
