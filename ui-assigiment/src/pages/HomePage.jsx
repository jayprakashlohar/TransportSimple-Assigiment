import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MidSection from "../components/HomeMidSection/MidSection";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Mid section */}

      <div>
        <MidSection/>
      </div>
    </>
  );
};

export { HomePage };
