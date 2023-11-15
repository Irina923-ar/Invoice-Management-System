import React from "react";

const Empty = () => {
  return (
    <div className="empty">
      <img src="assets/illustration-empty.svg"></img>
      <div className="title">There is nothing here</div>
      <div className="description">
        Create an invoice by clicking the New Invoice button and get started
      </div>
    </div>
  );
};

export default Empty;
