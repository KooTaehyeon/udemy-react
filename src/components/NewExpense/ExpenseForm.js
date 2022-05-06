import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  // const [enterdTitle, setEnteredTitle] = useState('');
  // const [enterdAmount, setEnteredAmount] = useState('');
  // const [enterdDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enterdAmount: '',
    enterdDate: '',
  });
  const titleChangeHandler = (e) => {
    setUserInput({ ...userInput, enteredTitle: e.target.value });
    console.log(userInput);
  };
  const amountChangeHandler = (e) => {
    setUserInput({ ...userInput, enterdAmount: e.target.value });
  };
  const dateChangeHandler = (e) => {
    setUserInput({ ...userInput, enterdDate: e.target.value });
  };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type={'text'} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type={'number'}
            min={'0.01'}
            step={'0.01'}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type={'date'}
            min={'2019-01-01'}
            max={'2022-12-31'}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
