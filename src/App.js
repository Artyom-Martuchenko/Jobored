import { useState } from "react";
import Header from "./header";
import { Navigate, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import FavouritePage from "./Pages/FavouritePage";
import styled from "styled-components";
import starPassive from "./component/Widget/StarPassive.png";

const StyledDiv = styled.div`
  width: full-screen;
  height: 84px;
  padding: 10px 162px 10px 162px;
  gap: 308px;
  background-color: white;
`;

const vacancy = [
  {
    id: Math.random(),
    name: "Менеджер-Дизайнер",
    time: "Полный рабочий день",
    salary: 70000,
    place: "Новый Уренгой",
    favourite: starPassive,
    label: 'Менеджер'
  },
  {
    id: Math.random(),
    name: "Ведущий графический дизайнер НЕ УДАЛЕННО",
    time: "Полный рабочий день",
    salary: 80000,
    place: "Москва",
    favourite: starPassive,
    label: 'Дизайнер'
  },
  {
    id: Math.random(),
    name: "Работник декорации, дизайнер(ТЦ Амбар)",
    time: "Полный рабочий день",
    salary: 70000,
    place: "Самара",
    favourite: starPassive,
    label: 'Дизайнер'
  },
];

function PageLayout() {
  return (
    <StyledDiv>
      <Header />
      <Outlet />
    </StyledDiv>
  );
}

function App() {
  const [searchList, setSearchList] = useState(vacancy);

  function favouritecallback(prop) {
    setSearchList((prevState) => {
      const second = prevState.filter((item) => item.id !== prop.id);
      return [...second, prop];
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<PageLayout />}
        children={[
          <Route path="" element={<Navigate to="search" />} />,
          <Route
            path="search"
            element={
              <SearchPage
                list={searchList}
                parentcallback={favouritecallback}
              />
            }
          />,
          <Route
            path="favorite"
            children
            element={
              <FavouritePage
                favouriteVacancy={searchList.filter(
                  (x) => x.favourite !== starPassive
                )}
                parentcallback={favouritecallback}
              />
            }
          />,
        ]}
      />
    </Routes>
  );
}

export default App;
