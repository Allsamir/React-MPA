import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

interface ErrorMessage {
  statusText: string;
  status: number;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as ErrorMessage;
  const navigate = useNavigate();
  console.error(error);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops!!</h1>
      <p>Sorry! something unexpected occurred</p>
      <p>
        <i>{`${error.status} Page not found`}</i>
        <br />
        <br />
        <button onClick={() => navigate("/")}>Home Page</button>
      </p>
    </div>
  );
};

export default ErrorPage;
