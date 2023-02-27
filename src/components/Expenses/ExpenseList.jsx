import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear() === +filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter 
          selected={filteredYear}
          onChangeYearFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpenseList;
