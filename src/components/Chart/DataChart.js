import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export const DataChart = () => {
  return (
    <Pie
      datasetIdKey='coast'
      data={{
        labels: [
          'West',
          'East'
        ],
        datasets: [{
          label: 'Collegiate Football',
          data: [16, 16],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      }}
    />
  );
};
// eslint-disable-next-line no-console
console.log(Chart);