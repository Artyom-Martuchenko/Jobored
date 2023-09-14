import React, { useState } from "react";
import "./header.css";
import logo from "./Union.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

const StyledImg = styled.img`
  margin-left: 0px;
  width: 30px;
  height: 30px;
`;

const Header = () => {
  const [varik, setVarik] = useState([true, false]);

  function PageClicker() {
    setVarik((prevState) => {
      return [...prevState].map((x) => !x);
    });
  }

  return (
    <StyledUl>
      <StyledImg src={logo} alt="" />
      <h3
        style={{
          display: "inline",
          paddingLeft: "12px",
          marginTop: "0px",
        }}
      >
        Jobored
      </h3>
      <Link
        id="link1"
        style={varik[0] ? { color: "blue" } : { color: "black" }}
        onClick={PageClicker}
        to="search"
      >
        Поиск вакансий
      </Link>
      <Link
        id="link2"
        style={varik[1] ? { color: "blue" } : { color: "black" }}
        onClick={PageClicker}
        to="favorite"
      >
        Избранное
      </Link>
    </StyledUl>
  );
};

export default Header;
