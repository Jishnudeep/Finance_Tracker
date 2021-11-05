import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Expenditure = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: Rs. {totalExpenses}</span>
    </div>
  );
};

export default Expenditure;
