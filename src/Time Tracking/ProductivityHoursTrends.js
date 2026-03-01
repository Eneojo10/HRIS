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

function ProductivityHoursTrends() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Productivity Hours',
        data: [6300, 6200, 6400, 6350, 6300, 6400],
        borderColor: '#ff7f50',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#ff7f50',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: 'Total Hours',
        data: [100, 120, 140, 160, 180, 200],
        borderColor: '#14b8a6',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#14b8a6',
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
        max: 8000,
        ticks: {
          stepSize: 2000,
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ProductivityHoursTrends;
