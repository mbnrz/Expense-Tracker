import React from "react";
import Header from "./Header";
import "./components.css";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import AddNewTransition from "./AddNewTransition";

const Main = () => {
  return (
    <div id="main">
      <Header />
      <IncomeExpense />
      <History />
      <AddNewTransition />
    </div>
  );
};

export default Main;
