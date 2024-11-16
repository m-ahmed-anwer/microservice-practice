import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
  return (
    <div>
      <h1>Post App</h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}
