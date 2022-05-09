import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpanseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpanseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpanseItem;
