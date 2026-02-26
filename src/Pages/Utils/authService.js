import axios from 'axios';
import { BASE_URL } from './globals';

export const authService = {
    // Verify domain and send OTP
    verifyDomain: async (name, domain) => {
        const response = await axios.post(`${BASE_URL}/api/login/verify-domain`, {
            name,
            domain
        });
        return response.data;
    },

    // Verify OTP and get token
    verifyOTP: async (email, otp, name, domain) => {
        const response = await axios.post(`${BASE_URL}/api/login/verify-otp`, {
            name,
            domain, 
            otp
        });
        return response.data;
    },

    // Verify device from email link
    verifyDevice: async (token) => {
        const response = await axios.get(`${BASE_URL}/api/login/verify-device/${token}`);
        return response.data;
    }
};