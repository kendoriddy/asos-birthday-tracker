import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h3>ASOS'13 Birthday Records</h3>
      <Link to="/empdetails">Members Details</Link><br />
      <Link to="/empbirthday">Today's celebrants</Link>
    </div>
  );
};

export default Home;
