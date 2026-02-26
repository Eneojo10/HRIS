import axios from 'axios';
import { BASE_URL, getAuthHeaders } from './globals';

export const employeeService = {
    // Get all employees with populated fields
    getAllEmployees: async () => {
        try {
            const headers = getAuthHeaders();
            const response = await axios.get(`${BASE_URL}/employees`, { headers });
            return response.data;
        } catch (error) {
            console.error('Failed to load employees:', error);
            throw error;
        }
    },

    // Get total employee count
    getTotalEmployees: async () => {
        try {
            const headers = getAuthHeaders();
            const response = await axios.get(`${BASE_URL}/employees/total`, { headers });
            return response.data;
        } catch (error) {
            console.error('Failed to load total employees:', error);
            return { totalEmployees: 0 };
        }
    },

    // Get employees split into batches
    getEmployeesSplit: async () => {
        try {
            const headers = getAuthHeaders();
            const response = await axios.get(`${BASE_URL}/employee/split`, { headers });
            return response.data;
        } catch (error) {
            console.error('Failed to load employee split:', error);
            return { firstBatch: [], remainingBatch: [], totalEmployees: 0 };
        }
    },

    // Create new employee
    createEmployee: async (employeeData) => {
        const headers = getAuthHeaders();
        const response = await axios.post(`${BASE_URL}/employee`, employeeData, { headers });
        return response.data;
    }
};