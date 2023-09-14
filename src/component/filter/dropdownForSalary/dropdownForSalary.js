import React from "react";
import "./dropdownForSalary.css";
let Icon = ({ angel = 0 }) => {
  return (
    <svg
      style={
        angel === 180
          ? { transform: "rotate(180deg)" }
          : { transform: "rotate(0deg)" }
      }
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.50006 7.5L6.39054 4.83469C6.16584 4.6421 5.83428 4.6421 5.60959 4.83469L2.50006 7.5"
        stroke="#ACADB9"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default function InputForSalary(prop) {
    const [count, setCount] = React.useState('')
    
    let countListener = (e) => {
        console.log(typeof(count))
        if(e.target.value !== ''){
          setCount(Number(e.target.value))
          prop.parentCallBack(Number(e.target.value)) 
        }else
          setCount(e.target.value)
    }

    let countIncrement = () => {
        if(typeof(count) === "string")
            setCount(1)
        else
            setCount(count + 1)
            prop.parentCallBack(count + 1)
    }

    let countDecrement = () => {
        if(count > 0 && typeof(count) === "number"){
            setCount(Number(count)-1)
            prop.parentCallBack(Number(count)-1)
        }else
            setCount('')  
    }

    return (
        <div className="container">
        <input
            className="dropdown-input"
            style={{ display: "inline" }}
            type="text"
            placeholder={prop.placeHolder}
            onChange={(e)=>{countListener(e)}}
            value={count}
        />
        <div style={{ display: "inline-grid", verticalAlign: 'middle' }}>
            <button style={{paddingTop: '1px'}} className="b1" onClick={countIncrement}>
            <Icon angel/>
            </button>
            <button className="b1" onClick={countDecrement}>
            <Icon angel={180} />
            </button>
        </div>
        </div>
    );
}
