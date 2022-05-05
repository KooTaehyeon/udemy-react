import React from 'react';
import './Expanses.css';
import ExpanseItem from './ExpanseItem';
import Card from './Card';

const Expanses = ({ data }) => {
  return (
    <Card className='expenses'>
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
    </Card>
  );
};

export default Expanses;
