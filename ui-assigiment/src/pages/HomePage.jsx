import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MidSection from "../components/HomeMidSection/MidSection";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Mid section */}

      <div>
        <MidSection />
      </div>
      {/* "Footer section" */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export { HomePage };
