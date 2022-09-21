import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("test");
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const [amount, setAmount] = useState("");
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const [date, setDate] = useState("");
  const dateChangeHandler = (event) => setDate(event.target.value);

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  // const titleChangeHandler = (event) =>
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // const amountChangeHandler = (event) =>
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: event.target.value };
  //   });
  // const dateChangeHandler = (event) =>
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: event.target.value };
  //   });

  const saveHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSave(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={saveHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <div>Title</div>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <div>Amount</div>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <div>Date</div>
          <input
            type="date"
            min="2019-01-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save</button>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
