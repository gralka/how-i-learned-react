import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [ userInput, setUserInput ] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };

  const amountChnageHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler} />
        </div> 
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChnageHandler} />
        </div> 
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            mindate="2019-01-01"
            maxdate="2025-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler} />
        </div> 
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
