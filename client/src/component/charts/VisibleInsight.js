import React from 'react';
import { Line } from 'react-chartjs-2';

const VisibleInsight = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Unique Customers',
        data: [100, 150, 180, 220, 300, 250, 270, 320, 280, 220, 190, 230],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Loyal Customers',
        data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Other Customers',
        data: [200, 180, 160, 140, 120, 100, 80, 60, 80, 100, 120, 140],
        borderColor: 'orange',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
        legend: {
          position: 'bottom', // Place the legend at the bottom
        },
      },
  };
  

  return (
    <div className="chart-container">
      <Line data={data} options={options} height={300} width={500}/>
    </div>
  );
};

export default VisibleInsight;


