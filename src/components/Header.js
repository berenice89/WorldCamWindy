import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <Link to={"/"}>
        <img src="logo.png" width="130px" alt="World Cam Windy" />
      </Link>
    </div>
  );
}

export default Header;
