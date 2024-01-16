import React, { useState } from "react";

import Checkbox from "./Checkbox";

const Filter = () => {
  return (
    <div className="filter-post">
      <Checkbox status="draft"></Checkbox>
      <Checkbox status="pending"></Checkbox>
      <Checkbox status="paid"></Checkbox>
    </div>
  );
};

export default Filter;
