import React, { useEffect } from "react";
import { useRef } from "react";

const UForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            nameRef.current?.value,
            emailRef.current?.value,
            h1Ref.current?.innerHTML
          );
          h1Ref.current ? (h1Ref.current.innerHTML = "Hello Allsamir") : null;
        }}
      >
        <input type="text" ref={nameRef} placeholder="Name" name="name" />
        <br />
        <br />
        <input type="email" ref={emailRef} placeholder="Email" name="email" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1 ref={h1Ref}>Hello World</h1>
    </>
  );
};

export default UForm;
