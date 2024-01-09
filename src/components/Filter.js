import React from "react";

const Filter = () => {
  return (
    <div className="filter-post">
      <div className="filter-post-div">
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
      </div>
    </div>
  );
};

export default Filter;
