import React from 'react';
import ExpanseItem from './ExpanseItem';
import Card from '../UI/Card';
import './Expanses.css';
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
