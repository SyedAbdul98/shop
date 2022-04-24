import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import "./ProductSearchResult.css";

export default function ProductSearchResult() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="product-search-result">
        <div className="categories">
          {" "}
          <span className="category-text">
            Categories <i class="bi bi-caret-down-fill"></i>{" "}
          </span>
          <div className="sort">
            {" "}
            Sort By
            <select name="" id="" className="sort-filter">
              <option value="">Best Match</option>
              <option value="">High to Low</option>
              <option value="">Low to High</option>
            </select>
          </div>
        </div>
        <div className="two"></div>
        
      </div>
      <Footer />
    </div>
  );
}
