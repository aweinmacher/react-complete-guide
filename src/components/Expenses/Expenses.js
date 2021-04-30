import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = ({ items }) => {
  // [localVarName, setter] = useState(initialValOfLocalVar)
  const [year, setYear] = useState("2020");

  const filterChoiceHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChosen={filterChoiceHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}; 

export default Expenses;
