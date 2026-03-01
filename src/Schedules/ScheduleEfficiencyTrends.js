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

function ScheduleEfficiencyTrends() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Coverage %',
        data: [96, 96, 90, 98, 95, 96],
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
        label: 'Efficiency %',
        data: [94, 94, 88, 96, 93, 94],
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
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
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

export default ScheduleEfficiencyTrends;
