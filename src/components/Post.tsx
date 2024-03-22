import React from "react";
import { useNavigate } from "react-router-dom";

interface ChildProps {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const Post: React.FC<ChildProps> = ({ posts }) => {
  const { title, id } = posts;
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
      <h1>Title</h1>
      <h2>{title}</h2>
      <button onClick={() => navigate(`/post/${id}`)}>Full Post</button>
    </div>
  );
};

export default Post;
