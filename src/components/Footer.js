import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Cafe Masaryktown</h2>
      <h4>Great food, great atmosphere, great time!</h4>
      {/* <p>
        located One Mile North Of County Line Road In The Beautiful City Of
        Masaryktown In Hernando County, While Driving On US 41 Also Know As
        Broad Street. You Will See A Blinking Yellow Light As You Come Through
        This Intersection You Will See The Restaurant On The East side of US Hwy
        41.
      </p> */}
      <ul className="info_list">
        <li>398 Broad St, Masaryktown, FL 34604</li>
        <li>(352)-754-2822</li>
        <li>Fax: (352) 754-9132</li>
        <li>email:Cafemasaryktown@gmail.com</li>
      </ul>
      <p className="Business_hours">Our business hours are Monday to Saturday 11:00 am to 5:00 pm</p>
    </div>
  );
}

export default Footer;
