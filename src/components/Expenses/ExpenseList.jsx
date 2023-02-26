import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    console.log(filteredYear);
  };

  return (
      <div>
        <Card className="expense-list">
          <ExpensesFilter 
            selected={filteredYear}
            onChangeYearFilter={filterChangeHandler} />
          <ExpenseItem
            date={expenses[0].date}
            title={expenses[0].title}
            price={expenses[0].amount} />
          <ExpenseItem
            date={expenses[1].date}
            title={expenses[1].title}
            price={expenses[1].amount} />
          <ExpenseItem
            date={expenses[2].date}
            title={expenses[2].title}
            price={expenses[2].amount} />
          <ExpenseItem
            date={expenses[3].date}
            title={expenses[3].title}
            price={expenses[3].amount} />
      </Card>
    </div>
  );
}

export default ExpenseList;
