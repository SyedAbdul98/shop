import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import ProductSearchResult from "./Components/Product Search Result/ProductSearchResult";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/productsearchresult" element={<ProductSearchResult/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}
