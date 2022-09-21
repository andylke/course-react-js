import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing == false) {
    const addNewExpenseHandler = (event) => {
      setIsEditing(true);
    };
    return (
      <div className="new-expense">
        <button type="button" onClick={addNewExpenseHandler}>
          Add New
        </button>
      </div>
    );
  } else {
    const saveHandler = (newExpense) => {
      const newExpenseData = {
        ...newExpense,
        id: Math.random().toString(),
      };
      props.onAddExpense(newExpenseData);
      setIsEditing(false);
    };
    const cancelHandler = () => {
      setIsEditing(false);
    };
    return (
      <div className="new-expense">
        <ExpenseForm onSave={saveHandler} onCancel={cancelHandler} />
      </div>
    );
  }
};

export default NewExpense;
