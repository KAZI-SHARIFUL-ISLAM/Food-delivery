import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default NavigationBar;