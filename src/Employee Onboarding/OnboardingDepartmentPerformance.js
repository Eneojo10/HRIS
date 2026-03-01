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

function OnboardingDepartmentPerformance() {
  const data = {
    labels: ['Engineering', 'Sales', 'Marketing', 'Product', 'Design'],
    datasets: [
      {
        label: 'Completed',
        data: [42, 35, 28, 18, 12],
        backgroundColor: '#2563eb',
        borderRadius: 4,
      },
      {
        label: 'In Progress',
        data: [12, 8, 10, 12, 10],
        backgroundColor: '#14b8a6',
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

export default OnboardingDepartmentPerformance;
