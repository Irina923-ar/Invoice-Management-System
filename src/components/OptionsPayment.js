import React from "react";

const OptionsPayment = ({ handleOptionChange }) => {
  return (
    <div className="options-payment">
      <div className="options" onClick={() => handleOptionChange("Net 1 Day")}>
        Net 1 Day
      </div>
      <div className="options" onClick={() => handleOptionChange("Net 7 Day")}>
        Net 7 Day
      </div>
      <div className="options" onClick={() => handleOptionChange("Net 14 Day")}>
        Net 14 Day
      </div>
      <div className="options" onClick={() => handleOptionChange("Net 30 Day")}>
        Net 30 Day
      </div>
    </div>
  );
};

export default OptionsPayment;
