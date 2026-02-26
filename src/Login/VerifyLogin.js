import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from '../Pages/Utils/authService';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../Images/logo-removebg-preview.png';

function VerifyLogin() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('verifying');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyDevice = async () => {
            const token = searchParams.get('token');
            if (!token) {
                setStatus('error');
                toast.error('Invalid verification link');
                return;
            }

            try {
                const response = await authService.verifyDevice(token);
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                setStatus('success');
                toast.success('Device verified! Redirecting...');
                setTimeout(() => navigate('/mainboard'), 2000);
            } catch (error) {
                setStatus('error');
                toast.error(error.response?.data?.error || 'Verification failed');
            }
        };

        verifyDevice();
    }, [searchParams, navigate]);

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <div className="login-details">
                        <div className='nav-leaf'>
                            <div className='le-af'>
                                <img src={logo} alt='' />
                            </div>
                            <div className='dropdown'>
                                <h2>enesHR</h2>
                            </div>
                        </div>
                        <br /><br />
                        <div className='login----text'>
                            {status === 'verifying' && <h4>Verifying your device...</h4>}
                            {status === 'success' && <h4>✓ Device verified successfully!</h4>}
                            {status === 'error' && <h4>✗ Verification failed</h4>}
                        </div>
                        <br />
                        {status === 'error' && (
                            <button onClick={() => navigate('/')} className="login-button">
                                Back to Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default VerifyLogin;
