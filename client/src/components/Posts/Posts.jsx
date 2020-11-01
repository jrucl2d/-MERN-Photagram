import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts() {
  const posts = useSelector((state) => state.posts); // rootReducer에서 posts라고 넣어놨음
  const classes = useStyles();

  console.log(posts);

  return (
    <div>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
