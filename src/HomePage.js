import "./style.css";
import React from 'react';
import PostList from "./PostList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HomePage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      {/*<img src="/src/picture_1.jpg" alt="picture_1" />*/}
      <h1>Food Delivery</h1>
      <h3>Post list</h3>
      <PostList />
    </div>
  );
}

export default HomePage;