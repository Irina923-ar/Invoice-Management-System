import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";
import BackdropDelete from "./BackdropDelete";

const IndividualPage = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const [showEditInvoiceForm, setShowEditInvoiceForm] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showPopup = () => {
    setShowPopupDelete(!showPopupDelete);
  };

  const toggleEditInvoice = () => {
    setShowEditInvoiceForm(!showEditInvoiceForm);
  };

  const markAsPaid = () => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "paid",
      }),
    };

    fetch(`http://localhost:3030/posts/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          const newPost = result.find((el) => el.id === id);
          setPost(newPost);
        } else {
          console.error("Invalid response format:", result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const deletePost = (postId) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:3030/posts/${postId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          const newPost = result.find((el) => el.id === id);
          setPost(newPost);
        } else {
          console.error("Invalid response format:", result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newPost = result.find((el) => el.id === id);
        setPost(newPost);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  const updatePosts = () => {
    getData();
  };

  return (
    <div className="individual-page">
      <div className="arrow-go-back">
        <Link to={`/`} className="btn-arrow-left">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </Link>
        <div className="title-back">Go Back</div>
      </div>
      {post ? (
        <>
          <div className="individual-page-header">
            <div className="container-status">
              <div className="status-title">Status</div>
              <div
                className={`status ${
                  post.status === "paid"
                    ? "status-paid"
                    : post.status === "pending"
                    ? "status-pending"
                    : "status-draft"
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
              <button
                className="btn-cancel-edit"
                onClick={() => toggleEditInvoice()}
              >
                Edit
              </button>
              <button className="btn-delete" onClick={() => showPopup()}>
                Delete
              </button>
              <button className="mark-as-paid" onClick={markAsPaid}>
                Mark as Paid
              </button>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <div>
                <div className="id-post">
                  <span className="hashtag">#</span>
                  {post.id}
                  <div className="subtitle">{post.description}</div>
                </div>
              </div>
              <div>
                <div className="subtitle">{post.senderAddress.street}</div>
                <div className="subtitle">{post.senderAddress.city}</div>
                <div className="subtitle">{post.senderAddress.postCode}</div>
                <div className="subtitle">{post.senderAddress.country}</div>
              </div>
            </div>
            <div className="container-content">
              <div className="container-content-payment">
                <div className="subtitle">Invoice Date</div>
                <div className="content">{post.createdAt}</div>
                <div className="subtitle subtitle-2">Payment Due</div>
                <div className="content">{post.paymentDue}</div>
              </div>
              <div className="container-content-bill-to">
                <div className="subtitle">Bill to</div>
                <div className="content">{post.clientName}</div>
                <div className="subtitle">{post.clientAddress.street}</div>
                <div className="subtitle">{post.clientAddress.city}</div>
                <div className="subtitle">{post.clientAddress.postCode}</div>
                <div className="subtitle">{post.clientAddress.country}</div>
              </div>
              <div className="container-content-sent-to">
                <div className="subtitle">Sent to</div>
                <div className="content">{post.clientEmail}</div>
              </div>
            </div>
            <div className="container-amount">
              <div className="container-amount-title">
                <div className="subtitle">Item Name</div>
                <div className="subtitle">QTY.</div>
                <div className="subtitle">Price</div>
                <div className="subtitle">Total</div>
              </div>
              <div>
                {post.items.map((item, index) => (
                  <div className="container-amount-items" key={index}>
                    <div className="content">{item.name}</div>
                    {isMobile ? (
                      <div className="container-amount-items-mobile">
                        <div className="item mobile-quantity">
                          {item.quantity}
                        </div>
                        <span className="item">x</span>
                        <div className="item">₤ {item.price.toFixed(2)}</div>
                      </div>
                    ) : (
                      <>
                        <div className="item">{item.quantity}</div>
                        <div className="item">₤ {item.price.toFixed(2)}</div>
                      </>
                    )}
                    <div className="content">₤ {item.total.toFixed(2)}</div>
                  </div>
                ))}
              </div>
              <div className="container-amount-total">
                <div className="container-amount-total-title">Amount Due</div>
                <div className="container-amount-total-price">
                  ₤ {post.total.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {showEditInvoiceForm && (
        <EditForm
          post={post}
          toggleEditInvoice={toggleEditInvoice}
          updatePosts={updatePosts}
        ></EditForm>
      )}
      {showPopupDelete && (
        <BackdropDelete
          post={post}
          showPopup={showPopup}
          deletePost={deletePost}
        ></BackdropDelete>
      )}
    </div>
  );
};

export default IndividualPage;
