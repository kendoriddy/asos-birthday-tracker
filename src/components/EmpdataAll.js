import React from "react";

const EmpdataAll = ({ ...item }) => {

  const { id, name, dob, gender, image } = item;
  return (
    <div key={id} className='person' style={{ boxShadow: "3px 3px 5px 5px #c9c9c9", padding: "5px 0px" }}>
      <img src={image} alt={name} />
      <div className='emp_details'>
        <h4>{name}</h4>
        <p>Gender: {gender}</p>
        <p>DOB: {dob}</p>
      </div>
    </div>
  );
};

export default EmpdataAll;
