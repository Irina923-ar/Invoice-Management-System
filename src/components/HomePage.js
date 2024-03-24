import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Empty from "./Empty";
import NewInvoiceForm from "./NewInvoiceForm";
import Filter from "./Filter";
import invoices from "./Invoices";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setPosts(invoices);
    setFilteredPosts(invoices);
  }, []);

  const updatePosts = () => {
    setPosts(invoices);
  };

  const toggleNewInvoiceForm = () => {
    setShowNewInvoiceForm(!showNewInvoiceForm);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (filteredPosts) => {
    const filtered = posts.filter((post) => {
      return filteredPosts[post.status];
    });
    setFilteredPosts(filtered);
  };

  const getTotalInvoiceCount = () => {
    return filteredPosts.length;
  };

  return (
    <div>
      <Navbar
        toggleNewInvoice={toggleNewInvoiceForm}
        toggleFilter={toggleFilter}
        totalInvoiceCount={getTotalInvoiceCount()}
      ></Navbar>
      {showFilter && <Filter onSearch={handleFilterChange}></Filter>}
      {showNewInvoiceForm && (
        <NewInvoiceForm
          updatePosts={updatePosts}
          toggleNewInvoice={toggleNewInvoiceForm}
        />
      )}
      <Empty></Empty>
      <div className="jobs-grid">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
