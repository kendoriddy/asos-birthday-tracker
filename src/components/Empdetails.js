import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  EmpdataAll  from './EmpdataAll';
import data from '../components/data.js'
import SearchField from './SearchField';

const Empdetails = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        // console.log(e.target.value)
    }
    
    const filteredData = data.filter(item => Object.values(item).join(' ').toLowerCase().match(searchTerm))

    return (
        <div className="container">
            <SearchField handleChange={handleChange} />
            <h3>Members Birthday Details</h3>

            {filteredData.map(item => (
                <EmpdataAll {...item} />
            ))}
            {/* <EmpdataAll employee={data.filter((item) => {
                if (searchTerm === "") {
                    return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
            })} /> */}
            <Link to="/empbirthday">Today's Birthday</Link>

        </div>
    )
}

export default Empdetails
