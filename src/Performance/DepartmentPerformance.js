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

function DepartmentPerformance() {
  const data = {
    labels: ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR'],
    datasets: [
      {
        label: 'Performance Score',
        data: [4.5, 4.3, 4.4, 4.2, 4.1],
        backgroundColor: '#2563eb',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 3.8,
        max: 4.6,
        ticks: {
          stepSize: 0.2,
        },
        grid: {
          color: '#e5e7eb',
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', height: '250px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default DepartmentPerformance;
