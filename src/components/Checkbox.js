import React, { useState } from "react";

const Checkbox = ({ status }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div>
      <div className="filter-post-div">
        <div
          onClick={handleClick}
          className={`checkbox ${active ? "active" : ""}`}
        >
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
            >
              <path
                d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : null}
        </div>
        <label onClick={handleClick}>{status}</label>
      </div>
    </div>
  );
};

export default Checkbox;
