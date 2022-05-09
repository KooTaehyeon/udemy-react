import React, { useState } from 'react';
import ExpanseItem from './ExpanseItem';
import Card from '../UI/Card';
import './Expanses.css';
import ExpenseFilter from './ExpenseFilter';
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
        {filteredExpenses.map((item) => {
          return (
            <ExpanseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </>
  );
};

export default Expanses;
