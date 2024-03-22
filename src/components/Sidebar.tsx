import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "3rem",
        justifyContent: "end",
        background: "aqua",
        padding: "2rem",
        color: "black",
      }}
    >
      <NavLink to={`/posts`}>Posts</NavLink>
      <NavLink to={`/users`}>Users</NavLink>
      <NavLink to={`/about`}>About</NavLink>
      <NavLink to={`/contact`}>Contact</NavLink>
      <NavLink to={`/`}>Home</NavLink>
    </nav>
  );
};

export default Sidebar;
