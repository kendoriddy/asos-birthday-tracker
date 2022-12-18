import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmpdataAll from "./EmpdataAll";
import SearchField from "./SearchField";
import { getStudents } from "../APIs/Read";

const Empdetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value)
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getStudents();
      setStudents(response.data)
    }
    fetchData();
  }, []);
  console.log(students);


  const filteredData = students.filter((item) =>
    Object.values(item).join(" ").toLowerCase().match(searchTerm)
  );

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
