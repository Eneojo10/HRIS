import React from 'react';

function TaskCompletionByCategory() {
  const categories = [
    { name: 'Documentation', completed: 95, pending: 5, overdue: 2, percentage: 93.1 },
    { name: 'Equipment Setup', completed: 88, pending: 12, overdue: 5, percentage: 83.8 },
    { name: 'Training', completed: 82, pending: 18, overdue: 8, percentage: 75.9 },
    { name: 'Meetings', completed: 90, pending: 10, overdue: 3, percentage: 87.4 },
    { name: 'System Access', completed: 85, pending: 15, overdue: 7, percentage: 79.4 },
  ];

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      {categories.map((category, index) => (
        <div key={index} style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{category.name}</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ flex: 1, display: 'flex', gap: '2px', height: '8px' }}>
              <div
                style={{
                  width: `${(category.completed / (category.completed + category.pending + category.overdue)) * 100}%`,
                  backgroundColor: '#1f2937',
                  borderRadius: '2px',
                }}
              />
              <div
                style={{
                  width: `${(category.pending / (category.completed + category.pending + category.overdue)) * 100}%`,
                  backgroundColor: '#e5e7eb',
                  borderRadius: '2px',
                }}
              />
              <div
                style={{
                  width: `${(category.overdue / (category.completed + category.pending + category.overdue)) * 100}%`,
                  backgroundColor: '#fecaca',
                  borderRadius: '2px',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '16px', minWidth: '300px', fontSize: '12px' }}>
              <span style={{ color: '#14b8a6' }}>{category.completed} completed</span>
              <span style={{ color: '#6b7280' }}>{category.pending} pending</span>
              <span style={{ color: '#dc2626' }}>{category.overdue} overdue</span>
              <span style={{ fontWeight: '600', marginLeft: 'auto' }}>{category.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskCompletionByCategory;
