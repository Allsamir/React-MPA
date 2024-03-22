import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const postData = useLoaderData() as Posts[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {postData.map((post) => (
        <Post key={post.id} posts={post} />
      ))}
    </div>
  );
};

export default Posts;
