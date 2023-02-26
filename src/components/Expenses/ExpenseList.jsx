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

  return (
      <div>
        <Card className="expense-list">
          <ExpensesFilter 
            selected={filteredYear}
            onChangeYearFilter={filterChangeHandler} />
          { expenses.map(expense => (
              <ExpenseItem
                date={expense.date}
                title={expense.title}
                price={expense.amount}
              />
          )) }
      </Card>
    </div>
  );
}

export default ExpenseList;
