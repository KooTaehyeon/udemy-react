import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState('');
  const [enterdAmount, setEnteredAmount] = useState('');
  const [enterdDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enterdAmount: '',
  //   enterdDate: '',
  // });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdDate: e.target.value };
    // });
  };
  const submitHendler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData();
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHendler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type={'text'}
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type={'number'}
            min={'0.01'}
            step={'0.01'}
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type={'date'}
            min={'2019-01-01'}
            max={'2022-12-31'}
            value={enterdDate}
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
