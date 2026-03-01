import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler, PointElement, LineElement, ArcElement } from 'chart.js'
import { Line, Pie } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler, PointElement, LineElement, ArcElement)

function Ticsdetails() {
  return (
    <div>
      <div className='payroll-analytics'>
        <div className='panalytics'>
          <div className='padding-one'>
            <h2>Payroll Trends (6 Months)</h2>
            <br/>
            <Line data={{
              labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Salaries',
                  data: [2000000, 2050000, 2000000, 2100000, 2150000, 2200000],
                  borderColor: '#FF9999',
                  backgroundColor: 'rgba(255, 153, 153, 0.7)',
                  fill: true,
                  tension: 0.4
                },
                {
                  label: 'Benefits',
                  data: [600000, 580000, 620000, 600000, 580000, 620000],
                  borderColor: '#999999',
                  backgroundColor: 'rgba(153, 153, 153, 0.7)',
                  fill: true,
                  tension: 0.4
                },
                {
                  label: 'Taxes',
                  data: [700000, 720000, 680000, 700000, 720000, 680000],
                  borderColor: '#66B2B2',
                  backgroundColor: 'rgba(102, 178, 178, 0.7)',
                  fill: true,
                  tension: 0.4
                }
              ]
            }} options={{
              responsive: true,
              plugins: {
                legend: { display: false }
              },
              scales: {
                y: {
                  stacked: true,
                  min: 100000,
                  max: 5000000,
                  ticks: {
                    callback: (value) => '₦' + (value / 1000000).toFixed(1) + 'M',
                    padding: 2
                  }
                },
                x: {
                  stacked: true
                }
              }
            }} />
          </div>

        </div>
        <div className='panalytics'>
          <div className='padding-one'>
            <h2>Cost Breakdown</h2>
            <div style={{ maxWidth: '280px', margin: '0 auto 25px auto' }}>
              <Pie data={{
                labels: ['Base Salary', 'Overtime', 'Benefits', 'Bonuses'],
                datasets: [{
                  data: [76, 6, 12, 6],
                  backgroundColor: ['#0066FF', '#00CC99', '#FFCC00', '#FF6633'],
                  borderWidth: 0
                }]
              }} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: { padding: 20 }
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => context.label + ' ' + context.parsed + '%'
                    }
                  }
                }
              }} />
            </div>
          </div>

        </div>

      </div><br /><br />
      <div className='panalyticss'>
        <div className='padding-one'>
          <h2>Department Cost Analysis</h2>
          <br/>
          <Bar data={{
            labels: ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'],
            datasets: [{
              label: 'Total Cost',
              data: [1250000, 700000, 450000, 200000, 150000, 220000],
              backgroundColor: '#FF6B5B',
              borderRadius: 4
            }]
          }} options={{
            indexAxis: 'x',
            responsive: true,
            plugins: {
              legend: { display: false }
            },
            scales: {
              y: {
                ticks: {
                  callback: (value) => '$' + (value / 1000000).toFixed(1) + 'M'
                }
              }
            }
          }} />
        </div>
      </div>

    </div>
  )
}

export default Ticsdetails