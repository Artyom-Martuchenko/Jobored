import React, { useState } from "react";
import Filter from "../component/filter/filter";
import Search from "../component/search/search";
import Widget from "../component/Widget/Widget";

const SearchPage = (props) => {
  const [poisk, setPoisk] = useState("");
  const [filterBox, setFilterBox] = useState({ sphere: '', minSalary: '', maxSalary: ''})

  let filterBoxCallBack = (prop) => {
    setFilterBox(prop)
  }

  function searchLineCallBack(name) {
    setPoisk(name);
  }

  let filterOutput = (x) => {
    if(filterBox.maxSalary === '' || x.salary <= filterBox.maxSalary){
      if(filterBox.minSalary === '' || x.salary >= filterBox.minSalary){
        if(filterBox.sphere === '' || x.label.includes(filterBox.sphere)){
          if(x.name.toLowerCase().includes(poisk)){
            return true;
          }
        }
      }
    }  
    return false;
  }

  return (
    <div>
      <ul style={{ display: "inline-flex" }}>
        <li style={{ display: "inline" }}>
          <Filter list={props.list} parentCallBack={filterBoxCallBack}/>
        </li>
        <li style={{ display: "inline", marginLeft: "28px" }}>
          <Search parentCallBack={searchLineCallBack} />
          {props.list
            .filter(filterOutput)
            .map((x) => (
              <Widget
                key={x.id}
                id={x.id}
                name={x.name}
                time={x.time}
                salary={x.salary}
                label={x.label}
                place={x.place}
                favourite={x.favourite}
                parentCallBack={props.parentcallback}
              />
            ))}
        </li>
      </ul>
    </div>
  );
};

export default SearchPage;