import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Sections/Footer";
import LandingPage from "./Components/Pages/LandingPage";
import Layout from "./Components/Navigation/Layout";

export default function App() {
  return (
    <div className="">
      <Navbar />
        <Layout/>
      <Footer/>
    </div>
  );
}
