import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  let expensesContent = (
    <p className="expenses-list__fallback">No expenses found.</p>
  );

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map(expense => (
        <li key={expense.id}>
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
