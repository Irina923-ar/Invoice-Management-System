import React, { useState } from "react";

const Navbar = ({ toggleNewInvoice, toggleFilter, totalInvoiceCount }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
    toggleFilter(!showFilter);
  };

  return (
    <div className="navbar">
      <div>
        <div className="invoice">Invoices</div>
        <div className="total-invoice">
          There are{" "}
          <span className="total-invoice-count">{totalInvoiceCount}</span> total
          invoices
        </div>
      </div>
      <div className="filter">
        <div className="filter-title">Filter by status</div>
        <button className="btn-arrow-down" onClick={handleFilterToggle}>
          <img src="assets/icon-arrow-down.svg" alt=""></img>
        </button>
      </div>
      <div className="add-invoice">
        <button className="btn-add" onClick={() => toggleNewInvoice()}>
          <img src="assets/icon-plus.svg" alt=""></img>
        </button>
        <div className="add-title">New Invoice</div>
      </div>
    </div>
  );
};

export default Navbar;
