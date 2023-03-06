import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const [ enteredDate, setEnteredDate ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle((_previousState) => event.target.value);
  };

  const amountChnageHandler = (event) => {
    setEnteredAmount((_previousState) => event.target.value);
  };

  const cancelHandler = () => {
    setEnteredTitle((_previousState) => '');
    setEnteredAmount((_previousState) => '');
    setEnteredDate((_previousState) => '');

    setIsEditing((_previousState) => false);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate((_previousState) => event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    setIsEditing((_previousState) => false);
  };

  if (!isEditing) {
    return (
      <div>
        <button type='button' onClick={() => setIsEditing((_previousState) => true)}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div> 
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChnageHandler} />
        </div> 
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            mindate='2019-01-01'
            maxdate='2025-12-31'
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div> 
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );

};

export default ExpenseForm;
