import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

function OnboardingCompletionTrends() {
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Completed',
        data: [16, 18, 28, 20, 18, 16, 20],
        borderColor: '#14b8a6',
        backgroundColor: 'rgba(20, 184, 166, 0.3)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 0,
      },
      {
        label: 'In Progress',
        data: [8, 6, 4, 12, 6, 8, 8],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.3)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 0,
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
        beginAtZero: true,
        max: 32,
        ticks: {
          stepSize: 8,
        },
        grid: {
          color: '#e5e7eb',
          drawBorder: false,
        },
      },
      x: {
        grid: {
          color: '#e5e7eb',
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', height: '250px' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default OnboardingCompletionTrends;
