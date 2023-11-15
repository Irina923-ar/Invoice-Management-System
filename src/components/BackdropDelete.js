import React from "react";

const BackdropDelete = () => {
  return (
    <div className="backdrop">
      <div className="backdrop-delete">
        <div className="title">Confirm Deletion</div>
        <div className="description">
          Are you sure you want to delete invoice post id? This action cannot be
          undone.
        </div>
        <div className="buttons">
          <button className="btn-cancel-edit">Cancel</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BackdropDelete;
