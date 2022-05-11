import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
  const datapointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...datapointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lebel}
          value={dataPoint.value}
          maxValue={totalMaximum}
          labal={dataPoint.lebel}
        />
      ))}
    </div>
  );
};

export default Chart;
