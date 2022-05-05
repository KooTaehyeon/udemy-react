import React from 'react';
import './ExpanseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpanseItem = (props) => {
  return (
    <div className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date} />
      </div>
      <h2> {props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  );
};

export default ExpanseItem;
