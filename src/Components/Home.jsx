import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
// import Practice from "./Practice";
import Arrivals from "./Arrivals";
import Sales from "./Sales";
import Featured from "./Featured";
// import Images from "./Images";
import Footer from "./Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBar />
      <SideBar />
      <Sales />
      <Arrivals />
      <Featured />
      <Footer />
    </React.Fragment>
  );
}
