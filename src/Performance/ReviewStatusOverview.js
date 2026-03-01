import React from 'react';

function ReviewStatusOverview() {
  const statuses = [
    { label: 'Completed', count: 142, percentage: 78, color: '#1c8443' },
    { label: 'In Progress', count: 28, percentage: 15, color: '#2563eb' },
    { label: 'Overdue', count: 8, percentage: 4, color: '#dc2626' },
    { label: 'Scheduled', count: 5, percentage: 3, color: '#6b7280' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {statuses.map((status, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500' }}>{status.label}</span>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span>{status.count}</span>
              <span style={{ color: status.color, fontWeight: '600' }}>{status.percentage}%</span>
            </div>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${status.percentage}%`,
                height: '100%',
                backgroundColor: status.color,
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewStatusOverview;
