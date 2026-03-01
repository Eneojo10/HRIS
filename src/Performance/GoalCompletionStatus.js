import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GoalCompletionStatus() {
  const data = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [70, 15, 15],
        backgroundColor: ['#14b8a6', '#2563eb', '#fbbf24'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default GoalCompletionStatus;
