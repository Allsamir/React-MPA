import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

interface Users {
  id: number;
  name: string;
  phone: string;
  website: string;
}

const Users: React.FC = () => {
  const userData = useLoaderData() as Users[];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {userData.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
