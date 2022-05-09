import React, { useState } from 'react';
import ExpanseItem from './ExpanseItem';
import Card from '../UI/Card';
import './Expanses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
const Expanses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList data={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expanses;
