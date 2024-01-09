import React from "react";
import { Link } from "react-router-dom";

const BackdropDelete = ({ post, showPopup, deletePost }) => {
  const handleDelete = () => {
    deletePost(post.id);
    showPopup(false);
  };

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
              <Link to={`/`}>
                <button className="btn-delete" onClick={handleDelete}>
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BackdropDelete;
