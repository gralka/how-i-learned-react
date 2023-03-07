import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not really unique but good enough here!
    };

    onAddExpense(expenseData);
    setIsEditing((_previousState) => false);
  };

  const startEditingHandler = () => {
    setIsEditing((_previousState) => true);
  };

  const stopEditingHandler = () => {
    setIsEditing((_previousState) => false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseData} />}
    </div>
  );
};

export default NewExpense;
