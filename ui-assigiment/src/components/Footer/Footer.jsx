import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="box1">
            <div className="usa">
              <h2 className="USA">USA</h2>
              <p className="contactDetails">
                447 Broadway, 2nd Floor, New York, NY, 10013 +1 (778) 316-7946
              </p>
            </div>
            <div className="usa">
              <h2 className="USA" style={{ marginLeft: "50px" }}>
                IND
              </h2>
              <p className="contactDetails" style={{ marginLeft: "50px" }}>
                Regus Office, Level 14, Concorde Towers, UB City, Bengaluru,
                Karnataka 560001 (+91) 94392 88888
              </p>
            </div>
            <div className="usa">
              <h2 className="USA" style={{ marginLeft: "50px" }}>
                UAF
              </h2>
              <p className="contactDetails" style={{ marginLeft: "50px" }}>
                3001, A A Tower, Sheikh Zayed Road, Dubai, UAE (+971) 52 962
                9814
              </p>
            </div>
          </div>
          <div className="helpDiv">
            <div>
              <p className="support">Help & Support </p>
              <p className="email">sales@Transportsimple.com</p>
            </div>
            <div>
              <p className="support">Help & Support </p>
              <p className="email">sales@Transportsimple.com</p>
            </div>
            <div>
              <p className="support">Help & Support </p>
              <p className="email">sales@Transportsimple.com</p>
            </div>
          </div>

          <div className="element">
            <p>Home</p>
            <p> Feature</p>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Contact us</p>
          </div>
          <div className="elePriv">
            <p>Sitemap</p>
            <p>Privacy Policy</p>
            <p>Employee App</p>
            <p>Privacy policy</p>
          </div>
        </div>

        <div className="box2">
          <div className="form">
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Massage</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type here..."
            ></textarea>
            <button className="submitBtn">Submit</button>
          </div>
          <div className="socialMedia">
            <img src="" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
