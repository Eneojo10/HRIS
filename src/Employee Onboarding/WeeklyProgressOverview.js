import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function WeeklyProgressOverview() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [
      {
        label: 'Completed Tasks',
        data: [155, 145, 205],
        borderColor: '#06b6d4',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#06b6d4',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: 'Pending Tasks',
        data: [10, 5, 12],
        borderColor: '#c7d2fe',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#c7d2fe',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4,
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
        max: 200,
        ticks: {
          stepSize: 50,
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
    <div style={{ padding: '20px', height: '300px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default WeeklyProgressOverview;
