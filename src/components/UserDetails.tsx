import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

interface UserDetails {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;
}

const UserDetails: React.FC = () => {
  const userDetails = useLoaderData() as UserDetails;
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1.5rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>Name: {userDetails.name}</h1>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>Website: {userDetails.website}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
