import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 ...">
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
      </div>
    </>
  );
}

export default Home;
