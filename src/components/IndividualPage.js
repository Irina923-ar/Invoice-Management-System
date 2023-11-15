import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";

const IndividualPage = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newPost = result.find((el) => el.id === id);
        console.log(newPost);
        setPost(newPost);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="individual-page">
      <div className="arrow-go-back">
        <Link to={`/`} className="btn-arrow-left">
          <img src="assets/icon-arrow-left.svg" alt="Arrow Left"></img>
        </Link>
        <div className="title">Go Back</div>
      </div>
      {post ? (
        <>
          <div className="individual-page-header">
            <div className="container-status">
              <div className="status-title">Status</div>
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
            </div>
            <div className="buttons">
              <button className="btn-cancel-edit">Edit</button>
              <button className="btn-delete">Delete</button>
              <button className="mark-as-paid">Mark as Paid</button>
            </div>
          </div>
          <div className="container">
            <div>
              <div className="id-post">
                <span className="hashtag">#</span>
                {post.id}
                <div>Graphic Design</div>
              </div>
              <div>{post.senderAddress}</div>
            </div>
            <div>
              <div>
                <div>Invoice Date</div>
                <div>{post.createdAt}</div>
                <div>Payment Due</div>
                <div>{post.paymentDue}</div>
              </div>
              <div>
                <div>Bill to</div>
                <div>{post.clientName}</div>
                <div>{post.clientAddress}</div>
              </div>
              <div>
                <div>Sent to</div>
                <div>{post.clientEmail}</div>
              </div>
            </div>
            <div className="container-amount">
              <div>
                <div>Item Name</div>
                <div>QTY.</div>
                <div>Price</div>
                <div>Total</div>
              </div>
              {/* map */}
              <div>{post.items}</div>
              <div>
                <div>Amount Due</div>
                <div>{post.total}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <EditForm></EditForm>
    </div>
  );
};

export default IndividualPage;
