import React, { useState, useEffect } from "react";

const Navbar = ({ toggleNewInvoice, toggleFilter, totalInvoiceCount }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
    toggleFilter(!showFilter);
  };

  return (
    <div className="navbar">
      <div>
        <div className="invoice">Invoices</div>
        {isMobile ? (
          <div className="total-invoice">
            <span className="total-invoice-count">{totalInvoiceCount}</span>
            <span className="invoices-text">invoices</span>
          </div>
        ) : (
          <div className="total-invoice">
            There are{" "}
            <span className="total-invoice-count">{totalInvoiceCount}</span>{" "}
            total invoices
          </div>
        )}
      </div>
      <div className="filter">
        {isMobile ? (
          <div className="filter-title" onClick={handleFilterToggle}>
            Filter
          </div>
        ) : (
          <div className="filter-title" onClick={handleFilterToggle}>
            Filter by status
          </div>
        )}
        <button className="btn-arrow-down" onClick={handleFilterToggle}>
          <img src="assets/icon-arrow-down.svg" alt=""></img>
        </button>
      </div>
      <div className="add-invoice">
        <button className="btn-add" onClick={() => toggleNewInvoice()}>
          <img src="assets/icon-plus.svg" alt=""></img>
        </button>
        {isMobile ? (
          <div className="add-title" onClick={() => toggleNewInvoice()}>
            New
          </div>
        ) : (
          <div className="add-title" onClick={() => toggleNewInvoice()}>
            New Invoice
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
