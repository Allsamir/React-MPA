import React from "react";
import useInputState from "../hooks/useInputState";

const Form: React.FC = () => {
  // Controlled form + Custom Hook
  const nameState = useInputState("");
  const emailState = useInputState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(nameState.value);
          console.log(emailState.value);
        }}
      >
        <input type="text" placeholder="Name" name="name" {...nameState} />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id=""
          {...emailState}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
