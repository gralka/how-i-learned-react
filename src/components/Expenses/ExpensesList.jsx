import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  let expensesContent = (
    <p className="expenses-list__fallback">No expenses found.</p>
  );

  if (items.length > 0) {
    expensesContent = items.map(expense => (
      <li key={expense.id}>
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      </li>
    ));
  }

  return (
    <ul className="expenses-list">
      {expensesContent}
    </ul>
  );
};

export default ExpensesList;
