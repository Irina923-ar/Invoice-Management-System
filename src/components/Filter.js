import React, { useState, useEffect } from "react";

import Checkbox from "./Checkbox";

const Filter = ({ onSearch }) => {
  const [filterOptions, setFilterOptions] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const handleCheckboxChange = (status) => {
    setFilterOptions((prevFilters) => ({
      ...prevFilters,
      [status]: !prevFilters[status],
    }));
  };

  useEffect(() => {
    onSearch(filterOptions);
  }, [filterOptions, onSearch]);

  return (
    <div className="filter-post">
      <Checkbox
        status="draft"
        isChecked={filterOptions.draft}
        handleCheckboxChange={() => handleCheckboxChange("draft")}
      ></Checkbox>
      <Checkbox
        status="pending"
        isChecked={filterOptions.pending}
        handleCheckboxChange={() => handleCheckboxChange("pending")}
      ></Checkbox>
      <Checkbox
        status="paid"
        isChecked={filterOptions.paid}
        handleCheckboxChange={() => handleCheckboxChange("paid")}
      ></Checkbox>
    </div>
  );
};

export default Filter;
