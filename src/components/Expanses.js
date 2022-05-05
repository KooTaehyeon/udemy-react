import React from 'react';
import './Expanses.css';
import ExpanseItem from './ExpanseItem';
const Expanses = ({ data }) => {
  return (
    <div className='expenses'>
      {data.map((item) => {
        return (
          <ExpanseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default Expanses;
