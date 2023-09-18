import {useState} from "react";
import "./filter.css";
import closeButton from "./close.png";
import Dropdown from "./dropdownForSphere/dropdownForSphere";
import InputForSalary from "./dropdownForSalary/dropdownForSalary";

function Filter(props) {
  const [filterValues, setFilterValues] = useState({sphere: '', minSalary: '', maxSalary: ''})
  
  let cleanClickerHandler = () =>{
    setFilterValues({sphere: '', minSalary: '', maxSalary: ''})
  }
  
  let minFunction = (prop) => {
    setFilterValues({ ...filterValues, minSalary: prop})
    console.log(`minSalary: ${filterValues.minSalary}`)
  }

  let maxFunction = (prop) => {
    setFilterValues({ ...filterValues, maxSalary: prop})
    console.log(`maxSalary: ${filterValues.maxSalary}`)
  }

  let sphereFunction = (prop) => {
    setFilterValues({ ...filterValues, sphere: prop})
    console.log(`sphere: ${filterValues.sphere}`)
  }
  
  let MoveDataToParent = () =>{
    props.parentCallBack(filterValues)
  }
  
  return (
    <div id="filter">
      <div style={{margin: '0px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3
          className="filter-name"
          style={{display: "inline", margin: '20px 0 0'}}
        >
          Фильтры
        </h3>
        <button id="cleanButton" onClick={cleanClickerHandler}>
          <h5
            style={{
              display: "inline",
              fontSize: '14px',
              margin: '0px'
            }}
          >
            Сбросить все
          </h5>
          <img
            src={closeButton}
            alt=""
            style={{ display: "inline"}}
            width='16px'
            height='16px'
          />
        </button>
      </div>
      <h4 id="filter-branch" style={{ marginTop: "32px", marginLeft: "20px" }}>
        Отрасль
      </h4>
      <Dropdown isMulti={false} onChange={(value) => sphereFunction(value.label)} isSearchable placeHolder="Выберете отрасль" options={props.list}/>
      <h4 id="filter-salary" style={{ marginTop: "20px", marginLeft: "20px" }}>
        Оклад
      </h4>
      <InputForSalary placeHolder='От' parentCallBack={minFunction} property={filterValues.minSalary}/>
      <InputForSalary placeHolder='До' parentCallBack={maxFunction} property={filterValues.maxSalary}/>
      <button
        id="filter-title-button"
        style={{ marginTop: "20px", marginLeft: "20px" }}
        onClick={MoveDataToParent}
      >
        Применить
      </button>
    </div>
  );
}

export default Filter;