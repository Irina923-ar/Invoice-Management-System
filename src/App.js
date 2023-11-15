import React from "react";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import IndividualPage from "./components/IndividualPage";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/individual-page/:id"
          element={<IndividualPage></IndividualPage>}
        />
      </Routes>
    </>
  );
};

export default App;
