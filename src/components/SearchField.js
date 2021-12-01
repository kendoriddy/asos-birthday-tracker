import React from 'react'

const SearchField = ({handleChange}) => {
  return (
    <div>
      <input type='text' placeholder='Search...' onChange={handleChange} style={{width: '100%', height: '35px', borderRadius: '5px', marginBottom: '10px'}} />
    </div>
  )
}

export default SearchField
