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
              efficiency. Send invoices within 30 seconds <br /> and speed up
              the cash inflows!
            </p>
          </div>

          <div className="dataBox"></div>
        </div>

        <div className="demoBox">
          <h2>Be more effiicent and profitable with TransportSimple</h2>
          <p>
            With TransportSimple, you'll have a one-stop shop for all your fleet
            maintenance needs. Easily track and monitor your vehicle services &
            expenses, build & maintain your inventory, get alerts for overdue
            inspections & scheduled repairs and much more! Get in control of
            your costs today!
          </p>
          <button className="bookADemo">Book A Demo</button>
        </div>

        {/* -------------------------------------------- */}
        <div className="cardDiv">
          <p className="cardHeading">
            There are 3 staps to get Worlds most visible plateform
          </p>
          <div className="line"></div>
          <div className="cardDetails">
            <div className="firstCard">
              <p className="firstCardP">We will your Tech partner</p>
              <p className="firstCardPara">
                Get the data you need to make informed decisions. With
                TransportSimple's real-time data-driven reports, you can track
                scheduled repairs, overdue inspections, driver performance,
              </p>
            </div>
            <div className="secondCard">
              <p className="firstCardP">We will your Tech partner</p>
              <p className="firstCardPara">
                Get the data you need to make informed decisions. With
                TransportSimple's real-time data-driven reports, you can track
                scheduled repairs, overdue inspections, driver performance,
              </p>
            </div>
            <div className="thirdCard">
              <p className="firstCardP">We will your Tech partner</p>
              <p className="firstCardPara">
                Get the data you need to make informed decisions. With
                TransportSimple's real-time data-driven reports, you can track
                scheduled repairs, overdue inspections, driver performance,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
