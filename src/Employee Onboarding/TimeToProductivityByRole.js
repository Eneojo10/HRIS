import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

function TimeToProductivityByRole() {
  const roles = [
    { name: 'Sales Rep', days: 8, target: 10, percentage: 125 },
    { name: 'Software Engineer', days: 12, target: 14, percentage: 117 },
    { name: 'Marketing Specialist', days: 10, target: 12, percentage: 120 },
    { name: 'Product Manager', days: 16, target: 18, percentage: 112 },
    { name: 'UX Designer', days: 11, target: 13, percentage: 118 },
    { name: 'Data Scientist', days: 18, target: 20, percentage: 111 },
  ];

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      {roles.map((role, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{role.name}</span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#14b8a6', fontWeight: '600' }}>{role.days} days</span>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>(target: {role.target} days)</span>
              <span style={{ backgroundColor: '#1f2937', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                {role.percentage}%
              </span>
              <IoCheckmarkCircle style={{ color: '#14b8a6', fontSize: '18px' }} />
            </div>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${(role.days / role.target) * 100}%`,
                height: '100%',
                backgroundColor: '#1f2937',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeToProductivityByRole;
