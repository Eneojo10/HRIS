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

function WeeklyOvertimeAnalysis() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Overtime Hours',
        data: [1300, 1320, 1310, 1320],
        backgroundColor: '#ff7f50',
        borderRadius: 4,
      },
      {
        label: 'Cost (₦)',
        data: [65, 70, 65, 68],
        backgroundColor: '#1e293b',
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
        max: 1400,
        ticks: {
          stepSize: 350,
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

export default WeeklyOvertimeAnalysis;
