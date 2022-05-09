import React from 'react';
import './ExpensesList.css';
import ExpanseItem from './ExpanseItem';
const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <h2 className='expenses-list__fallback'>데이터가 없음</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.data.map((item) => {
        return (
          <ExpanseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
