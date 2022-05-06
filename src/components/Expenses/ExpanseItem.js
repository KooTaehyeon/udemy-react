import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpanseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpanseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    let titles = 'upDeted';
    setTitle(titles);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2> {title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpanseItem;
