import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import BackdropDelete from "./BackdropDelete";
import Empty from "./Empty";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <div>
      <BackdropDelete></BackdropDelete>
      <Navbar></Navbar>
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
