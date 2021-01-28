import React from "react"

const SearchBox = ({OnSearch}) =>{
  return(
    <div>
      <input type = 'search' placeholder = 'Search Robots' onChange = {OnSearch}/>
    </div>
  );
}

export default SearchBox;
