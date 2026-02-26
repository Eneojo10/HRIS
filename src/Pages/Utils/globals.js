
export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Helper function to get auth headers
export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    console.log('Token check:', token ? 'Found' : 'Not found');
    if (!token) {
        return { 'Content-Type': 'application/json' };
    }
    console.log('Sending Authorization header with token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};