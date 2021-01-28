import React from "react"

const SearchBox = ({OnSearch}) =>{
  return(
    <div className = 'pa2'>
      <input className = 'pa3 ba b--green bg-lightest-blue' type = 'search' placeholder = 'Search Robots' onChange = {OnSearch}/>
    </div>
  );
}

export default SearchBox;
