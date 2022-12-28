import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import KacchiBhaiPage from "./KacchiBhaiPage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

<Route path="/kacchi-bhai" component={KacchiBhaiPage} />

const PostList = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
<Link to="/kacchi-bhai">Kacchi Bhai</Link>
<Link to="/chillox">Chillox</Link>
<Link to="/takeout">Takeout</Link>

        </div>
    </div>
  );
};

export default PostList;

