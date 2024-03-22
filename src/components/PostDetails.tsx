import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostDetails: React.FC = () => {
  const postDetails = useLoaderData() as Post;
  const navigate = useNavigate();
  const { postID } = useParams();
  console.log(postID);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1.5rem",
        padding: "2rem",
        textAlign: "center",
        color: postID === "4" ? "red" : "",
      }}
    >
      <h1>Title: {postDetails.title}</h1>
      <p>Body: {postDetails.body}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
