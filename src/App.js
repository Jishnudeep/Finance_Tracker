import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Expenditure from "./components/Expenditure";
import Remainder from "./components/Remainder";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remainder />
        </div>
        <div className="col-sm">
          <Expenditure />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
