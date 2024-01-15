import React, { useState } from "react";

import Checkbox from "./Checkbox";

const Filter = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="filter-post">
      {/* <div className="filter-post-div">
        <input type="checkbox" name="draft"></input>
        <label htmlFor="draft">Draft</label>
      </div>
      <div className="filter-post-div">
        <input type="checkbox" name="pending"></input>
        <label htmlFor="pending">Pending</label>
      </div>
      <div className="filter-post-div">
        <input type="checkbox" name="draft"></input>
        <label htmlFor="draft">Paid</label>
      </div> */}

      <Checkbox status="pending" />

      <div
        data-name="name"
        data-banane="banane"
        onClick={handleClick}
        className={`checkbox-test ${active ? "active" : ""}`}
      >
        {active ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832" stroke="white" strokeWidth="2" />
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
