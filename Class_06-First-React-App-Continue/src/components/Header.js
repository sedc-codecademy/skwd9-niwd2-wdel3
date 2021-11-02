import React from "react";
import "./Header.scss";

const Header = () => {
  // style="color: red;" not gonna work

  //CSS IN JS

  // const colorRed = {
  //   color: "red",
  // };

  return (
    <nav className="header">
      {/* <h1 style={{ color: "red" }}>Logo</h1>  */}
      {/* <h1 style={colorRed}>Logo</h1> */}
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
