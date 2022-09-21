import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  const expenses = props.expenses;

  const [year, setYear] = useState(props.year);

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == props.year
  );

  if (filteredExpenses.length == 0) {
    return (
      <Card className="expense-list">
        <p>No item</p>
      </Card>
    );
  } else {
    return (
      <Card className="expense-list">
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    );
  }
};

export default ExpenseList;
