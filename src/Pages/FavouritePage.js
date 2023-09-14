import React from "react";
import Widget from "../component/Widget/Widget";
import logo from './Frame.png'

const Icon = () => {
  return <div style={{marginTop:'80px'}}>
      <img src={logo} alt=""/>
      <h2>Упс, здесь ещё ничего нет!</h2>
    </div>
}

const FavouritePage = (props) => {
  return (
    <ul
      style={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
    >
      {props.favouriteVacancy.length > 0 ? props.favouriteVacancy.map((x) => (
        <Widget
          key={x.id}
          id={x.id}
          name={x.name}
          time={x.time}
          salary={x.salary}
          place={x.place}
          favourite={x.favourite}
          parentcallback={props.parentcallback}
        />
      )):<Icon/>}
    </ul>
  );
};

export default FavouritePage;
