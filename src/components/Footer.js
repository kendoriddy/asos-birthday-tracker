import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
        <div className="main-feature">
          <p className="feature">
            &copy;{new Date().getFullYear()} RideOnOne | All rights reserved |
            Terms Of Service | Privacy
          </p>
          <hr/>
          <p>Kehinde Onifade for ASOS'13</p>
      </div>
    </div>
  );
}

export default Footer;