import React from "react";
import EmpFilterContainer from "../container-component/EmpFilterContainer";
import EmpListContainer from "../container-component/EmpListContainer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="emp-container">
        <EmpFilterContainer />
        <div className="emp-list-container">
          <EmpListContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
