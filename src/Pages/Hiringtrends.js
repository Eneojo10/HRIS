import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function HiringTrends() {
  const data = {
    labels: ['Developers', 'Designers', 'Managers', 'Interns', 'Others'], // labels for each slice
    datasets: [
      {
        data: [40, 25, 20, 15,25], // values for each slice
        backgroundColor: [
          '#3b82f6',
          '#10b981',
          '#f59e0b',
          '#ef4444',
          '#8b5cf6'
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`
        }
      }
    }
  };

  return (
    <div className='hiring_trend'>
      <div className='h-t'>
        <h2>Hiring by Department</h2>
      </div>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default HiringTrends;
