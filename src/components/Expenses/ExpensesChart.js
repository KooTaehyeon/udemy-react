import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      lebel: '1월',
      value: 0,
    },
    {
      lebel: '2월',
      value: 0,
    },
    {
      lebel: '3월',
      value: 0,
    },
    {
      lebel: '4월',
      value: 0,
    },
    {
      lebel: '5월',
      value: 0,
    },
    {
      lebel: '6월',
      value: 0,
    },
    {
      lebel: '7월',
      value: 0,
    },
    {
      lebel: '8월',
      value: 0,
    },
    {
      lebel: '9월',
      value: 0,
    },
    {
      lebel: '10월',
      value: 0,
    },
    {
      lebel: '11월',
      value: 0,
    },
    {
      lebel: '12월',
      value: 0,
    },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
