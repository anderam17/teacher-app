import React from "react";
import "./DropDown.css"

function DropDown({ field, options, value, onChange, name }) {

  return (
    <>

      <div className="nav-item mb-1 p-2" id="search-by-dropdown">
    <select onChange={onChange} value={value} name={name} className="form-control custom-select-lg">
      <option key={`${field}-default`}>{field}</option>
      {options.map((item) => {
        return (
          <option className="dropdown-item" value={item.search} key={item.print}>
            {" "}
            {item.print}{" "}
          </option>
        );
      })}
    </select>
  </div>  
    </> 
  );
}

export default DropDown;
