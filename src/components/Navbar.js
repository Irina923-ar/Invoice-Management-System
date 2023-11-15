import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="invoice">Invoices</div>
        <div className="total-invoice">
          There are <span className="total-invoice-count">0</span> total
          invoices
        </div>
      </div>
      <div className="filter">
        <div className="filter-title">Filter by status</div>
        <button className="btn-arrow-down">
          <img src="assets/icon-arrow-down.svg"></img>
        </button>
      </div>
      <div className="add-invoice">
        <button className="btn-add">
          <img src="assets/icon-plus.svg"></img>
        </button>
        <div className="add-title">New Invoice</div>
      </div>
    </div>
  );
};

export default Navbar;
