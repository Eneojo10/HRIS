import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function SatisfactionDistribution() {
  const data = {
    labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
    datasets: [
      {
        data: [68, 45, 12, 3, 1],
        backgroundColor: ['#14b8a6', '#2563eb', '#fbbf24', '#f97316', '#dc2626'],
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
      <Pie data={data} options={options} />
    </div>
  );
}

export default SatisfactionDistribution;
