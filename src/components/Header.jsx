import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>📌 오늘의 일정</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
