import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmpdataAll from "./EmpdataAll";
import data from "../components/data.js";
import SearchField from "./SearchField";

const Empdetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Store list of all students
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("https://asos-birthday-tracker-001.onrender.com/students").then(
      (response) => response.json()
    );

    
    // update the state
    setUsers(response);
  };

  console.log(users);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).join(" ").toLowerCase().match(searchTerm)
  );

  console.log(filteredData);

  return (
    <div className="container">
      <SearchField handleChange={handleChange} />
      <h3>Members Birthday Details</h3>

      {filteredData.map((item) => (
        <EmpdataAll {...item} />
      ))}

      <Link to="/empbirthday">Today's Birthday</Link>
    </div>
  );
};

export default Empdetails;
