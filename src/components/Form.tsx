import React from "react";
import useInputState from "../hooks/useInputState";
import useCounter from "../hooks/UseCounter";

const Form: React.FC = () => {
  // Controlled form + Custom Hook
  const nameState = useInputState("");
  const emailState = useInputState("");
  const counter = useCounter(0);
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

      <div>
        <span style={{ fontSize: "4rem" }}>Counter: {counter.counter}</span>{" "}
        <br />
        <button
          style={{ fontSize: "2rem", margin: "0 1rem 0 0" }}
          onClick={counter.increment}
        >
          +
        </button>
        <button style={{ fontSize: "2rem" }} onClick={counter.decrement}>
          -
        </button>
      </div>
    </>
  );
};

export default Form;
