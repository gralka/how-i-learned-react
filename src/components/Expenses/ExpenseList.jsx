import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  const expenses = [...props.expenses];

  return (
      <div>
        <Card className="expense-list">
          <ExpenseFilter  />
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
