import React from 'react';
import { FaStar } from 'react-icons/fa';

function DepartmentRetentionRates() {
  const departments = [
    { name: 'Engineering', retention: 95, rating: 4.8 },
    { name: 'Sales', retention: 88, rating: 4.6 },
    { name: 'Marketing', retention: 92, rating: 4.7 },
    { name: 'Product', retention: 90, rating: 4.5 },
    { name: 'Design', retention: 97, rating: 4.9 },
    { name: 'Analytics', retention: 85, rating: 4.4 },
  ];

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', overflowX: 'auto', width: '100%' }}>
      {departments.map((dept, index) => (
        <div
          key={index}
          style={{
            minWidth: '140px',
            padding: '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>
            {dept.retention}%
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
            {dept.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <FaStar style={{ color: '#fbbf24', fontSize: '14px' }} />
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>{dept.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DepartmentRetentionRates;
