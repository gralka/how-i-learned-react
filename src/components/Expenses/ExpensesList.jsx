import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ items }) => {
  let expensesContent = <p>No expenses found.</p>;

  if (items.length > 0) {
    expensesContent = items.map(expense => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.amount}
      />
    ));
  }

  return (
    <div>{expensesContent}</div>
  );
};

export default ExpensesList;
