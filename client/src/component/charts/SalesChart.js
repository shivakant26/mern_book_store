import React from 'react';
import { Bar } from 'react-chartjs-2';

const SellsBarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Online Sales',
        data: [8000, 10000, 15000, 18000, 22000, 25000, 2000], // Values corresponding to each day
        backgroundColor: 'blue',
      },
      {
        label: 'Offline Sales',
        data: [6000, 9000, 12000, 17000, 21000, 24000, 1000], // Values corresponding to each day
        backgroundColor: 'green',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        ticks: {
          reverse: true,
        },
      },
    },
    plugins: {
        legend: {
          position: 'bottom',
        },
      },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options}  height={300} width={400}/>
    </div>
  );
};

export default SellsBarChart;

