import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const showForm = () => setIsFormShown(true);
  const hideForm = () => setIsFormShown(false);

  const form = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={hideForm} />;
  const button = <button type="button" onClick={showForm}>Add new expense</button>;

  return <div className="new-expense">{isFormShown ? form : button}</div>;
};

export default NewExpense;
