import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DepartmentCoverage() {
  const data = {
    labels: ['Production', 'Administration', 'Security', 'Maintenance', 'Quality'],
    datasets: [
      {
        label: 'Current',
        data: [50, 30, 13, 12, 18],
        backgroundColor: '#14b8a6',
        borderRadius: 4,
      },
      {
        label: 'Target',
        data: [45, 28, 13, 10, 15],
        backgroundColor: '#ff7f50',
        borderRadius: 4,
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
    scales: {
      y: {
        beginAtZero: true,
        max: 60,
        ticks: {
          stepSize: 15,
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default DepartmentCoverage;
