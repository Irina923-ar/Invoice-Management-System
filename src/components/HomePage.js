import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Empty from "./Empty";
import NewInvoiceForm from "./NewInvoiceForm";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false);

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

  useEffect(() => {
    getData();
  }, []);

  const updatePosts = () => {
    getData();
  };

  const toggleNewInvoiceForm = () => {
    setShowNewInvoiceForm(!showNewInvoiceForm);
  };

  return (
    <div>
      <Navbar toggleNewInvoice={toggleNewInvoiceForm}></Navbar>
      {showNewInvoiceForm && (
        <NewInvoiceForm
          updatePosts={updatePosts}
          toggleNewInvoice={toggleNewInvoiceForm}
        />
      )}
      <Empty></Empty>
      <div className="jobs-grid">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
