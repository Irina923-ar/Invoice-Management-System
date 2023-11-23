import React from "react";

const BackdropDelete = ({ post, showPopup }) => {
  return (
    <div className="backdrop">
      {post ? (
        <>
          <div className="backdrop-delete">
            <div className="title">Confirm Deletion</div>
            <div className="description">
              Are you sure you want to delete invoice #{post.id}? This action
              cannot be undone.
            </div>
            <div className="buttons">
              <button
                className="btn-cancel-edit"
                onClick={() => showPopup(false)}
              >
                Cancel
              </button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BackdropDelete;
