import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MyComponent() {
  const data = {
    labels: ['Target', 'Extra Days'],
    datasets: [
      {
        data: [30, 35 - 30], // target vs. extra
        backgroundColor: ['#4caf50', '#f44336'], // green for target, red for overage
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true }
    }
  };

  return (
    <div className='linkedIn'>
      <div className='link-ed'>
        <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>Designer</h4>
          <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
            <div><p>35 days</p></div>
            <div className='fifteen_'>
              <p>(target: 30 days)</p>
            </div>
            <div><p>icon</p></div>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="glassdoor" style={{ width: '180px', marginTop: '10px' }}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
