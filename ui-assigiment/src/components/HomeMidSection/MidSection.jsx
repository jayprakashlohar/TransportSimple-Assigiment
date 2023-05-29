import React from "react";

const MidSection = () => {
  return (
    <>
      <div>
        <div className="mainDiv">
          <h2>Content fleet management Content fleet</h2>
          <p>
            A more efficient option than using spreadsheets & traditional fleet
            solutions to manage trips & invoices, fleet performance &
            maintenance in real-time. TransportSimple helps achieve enhanced
            productivity, increased profits, and ease in daily operations.
          </p>
          <div>
            <button className="getStartBtn">Get Started</button>
            <button className="contactBtn">Contact Us</button>
          </div>
        </div>

        <div className="secondContant">
          <div className="eleDiv">
            <p className="knowAbout">
              KNOW ABOUT{" "}
              <span style={{ color: "#4AA0FC" }}>TRANSPORTSIMPLE</span>{" "}
            </p>
            <h2> At our company, we specialize in providing comprehensive</h2>
            <p className="transPara">
              TransportSimple's trip management makes it easy to see how much
              you're earning on every trip. Keep tabs on the success of each
              journey, miles covered, fuel costs, and the proficiency of your
              drivers. Track all your pending job orders and increase your trip
              efficiency. Send invoices within 30 seconds <br /> and speed up the cash
              inflows!
            </p>
          </div>

          <div className="dataBox"></div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
