import React, { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>📌 오늘의 일정</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 최적화
// const memoizedHeader = memo(Header);
// export default memoizedHeader;

export default memo(Header);
