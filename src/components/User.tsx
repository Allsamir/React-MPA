import React from "react";
import { Link } from "react-router-dom";

interface ChildProps {
  user: {
    id: number;
    name: string;
    phone: string;
    website: string;
  };
}

const User: React.FC<ChildProps> = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1.5rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2>Name: {user.name}</h2>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link to={`/user/${user.id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
