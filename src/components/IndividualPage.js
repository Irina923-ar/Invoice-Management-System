import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";

const IndividualPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  console.log(posts);

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
      {posts ? (
        <>
          <div className="individual-page-header">
            <div className="container-status">
              <div className="status-title">Status</div>
              <div
                className={`status ${
                  posts.status === "paid"
                    ? "status-paid"
                    : posts.status === "pending"
                    ? "status-pending"
                    : "status-draft"
                }`}
              >
                <div
                  className={`status-circle ${
                    posts.status === "paid"
                      ? "status-circle-paid"
                      : posts.status === "pending"
                      ? "status-circle-pending"
                      : "status-circle-draft"
                  }`}
                ></div>
                <div className="status-post">{posts.status}</div>
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
                {posts.id}
                <div>Graphic Design</div>
              </div>
              <div>{posts.senderAddress}</div>
            </div>
            <div>
              <div>
                <div>Invoice Date</div>
                <div>{posts.createdAt}</div>
                <div>Payment Due</div>
                <div>{posts.paymentDue}</div>
              </div>
              <div>
                <div>Bill to</div>
                <div>{posts.clientName}</div>
                <div>{posts.clientAddress}</div>
              </div>
              <div>
                <div>Sent to</div>
                <div>{posts.clientEmail}</div>
              </div>
            </div>
            <div className="container-amount">
              <div>
                <div>Item Name</div>
                <div>QTY.</div>
                <div>Price</div>
                <div>Total</div>
              </div>
              <div>{posts.items}</div>
              <div>
                <div>Amount Due</div>
                <div>{posts.total}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Waiting for data</>
      )}
      <EditForm></EditForm>
    </div>
  );
};

export default IndividualPage;
