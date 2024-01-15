import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <Link to={`/individual-page/${post.id}`} className="link">
        <div className="posts">
          <div className="id-post">
            <span className="hashtag">#</span>
            {post.id}
          </div>
          <div className="payment-due">Due {post.paymentDue}</div>
          <div className="client-name">{post.clientName}</div>
          <div className="total">₤ {post.total}</div>
          <div
            className={`status ${
              post.status === "paid" ? "status-paid" : post.status === "pending" ? "status-pending" : "status-draft"
            }`}
          >
            <div
              className={`status-circle ${
                post.status === "paid"
                  ? "status-circle-paid"
                  : post.status === "pending"
                  ? "status-circle-pending"
                  : "status-circle-draft"
              }`}
            ></div>
            <div className="status-post">{post.status}</div>
          </div>
          <img className="btn-arrow-right" src="assets/icon-arrow-right.svg" alt=""></img>
        </div>
      </Link>
    </div>
  );
};

export default Post;
