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
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function PerformanceTrends() {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
    datasets: [
      {
        label: 'Performance Score',
        data: [4.1, 4.2, 4.3, 4.2, 4.4, 4.3],
        borderColor: '#2563eb',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#2563eb',
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
        display: false,
      },
      grid: {
        drawBorder: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 4.0,
        max: 4.6,
        ticks: {
          stepSize: 0.2,
        },
        grid: {
          drawBorder: false,
          color: '#e5e7eb',
          drawTicks: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          color: '#e5e7eb',
          drawTicks: false,
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

export default PerformanceTrends;
