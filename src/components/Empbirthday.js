import React from "react";
import { Link } from "react-router-dom";
import data from "../components/data.js";
import Empdata from "./Empdata.js";


const Empbirthday = () => {
  return (
    <div className='container'>
      <h3>Today's Celebrant</h3>
      <Empdata employee={data} />
      <Link to='/empdetails'> Members Details</Link>
    </div>
  );
};

export default Empbirthday;
