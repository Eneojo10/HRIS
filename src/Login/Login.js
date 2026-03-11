import React, { useState } from 'react';
import { Users } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../Pages/Utils/authService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../Images/enesHr_logo_image-removebg-preview.png';


function Login() {
    const [flipped, setFlipped] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ domain: '', name: '', otp: '' });
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleDomainSubmit = async (e) => {
        e.preventDefault();
        if (!formData.domain) return toast.error('Please enter your domain');
        setStep(2);
    };

    const handleNameSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) return toast.error('Please enter your name');

        setLoading(true);
        try {
            const response = await authService.verifyDomain(formData.name, formData.domain);
            setUserEmail(response.email);
            setStep(3);
            toast.success('OTP sent! Check console for testing.');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to verify domain');
        } finally {
            setLoading(false);
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        if (!formData.otp) return toast.error('Please enter OTP');

        setLoading(true);
        try {
            const response = await authService.verifyOTP(userEmail, formData.otp, formData.name, formData.domain);
            console.log('Login response:', response);
            
            if (response.requiresVerification) {
                toast.info('Verification email sent! Please check your email to complete login.');
                return;
            }
            
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            console.log('Token stored:', localStorage.getItem('token'));
            toast.success('Login successful!');
            navigate('/mainboard');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Flip Card (wraps everything INCLUDING footer) */}
                <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                    <div className="flip-card-inner">

                        {/* FRONT SIDE (Login Form + Footer) */}
                        <div className="flip-card-front">
                            <div className="login-box">
                                <div className="login-details">
                                    <div className='nav-leaf'>
                                        {/* <div className='le-af'>
                                            <img src={logo} alt='' />
                                        </div> */}
                                        <div className='dropdown-logo'>
                                            <img src={logo} alt='' className='mobile-logo' />
                                        </div>
                                    </div>
                                    
                                    <div className='login----text'>
                                        {step === 1 && <h4>Enter your EnesHR Domain to login.</h4>}
                                        {step === 2 && <h4>Enter your name for {formData.domain}.eneshr.com</h4>}
                                        {step === 3 && <h4>Enter OTP sent to {userEmail}</h4>}
                                    </div>
                                </div>

                                <div className='input-flex'>
                                    <form onSubmit={step === 1 ? handleDomainSubmit : step === 2 ? handleNameSubmit : handleOTPSubmit}>
                                        <div className="input-wrapper">
                                            <input
                                                type="text"
                                                name={step === 1 ? "domain" : step === 2 ? "name" : "otp"}
                                                value={step === 1 ? formData.domain : step === 2 ? formData.name : formData.otp}
                                                onChange={handleInputChange}
                                                placeholder={step === 1 ? "companydomain" : step === 2 ? "Your name" : "6-digit OTP"}
                                                className="login-input"
                                                maxLength={step === 3 ? "6" : undefined}
                                            />

                                            {step === 1 && (
                                                <span className="enes-suffix">.eneshr.com</span>
                                            )}
                                        </div>

                                        <div className='domain-text'>
                                            <button type="submit" className="login-button" disabled={loading}>
                                                {loading ? (step === 2 ? 'Sending...' : 'Verifying...') :
                                                    (step === 1 ? 'Continue' : step === 2 ? 'Send OTP' : 'Login')}
                                            </button>
                                            {step === 1 && (
                                                <div className='wid'>
                                                    <Link
                                                        to="#"
                                                        className="text-blue-600 underline cursor-pointer flip-links"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setFlipped(true);
                                                        }}
                                                    >
                                                        What's my Domain?
                                                    </Link>
                                                </div>
                                            )}
                                            {step > 1 && (
                                                <div className='wid'>
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(step - 1)}
                                                        className="text-blue-600 underline cursor-pointer flip-links"
                                                        style={{ background: 'none', border: 'none' }}
                                                    >
                                                        Back
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>


                            {/* FOOTER for front side */}
                            <div className='login-footer-box'>
                                <div className='login-footer'>
                                    <div className='privacy'>
                                        <p>Privacy Policy</p>
                                    </div>
                                    <div className='wid_'>
                                        <h4>.</h4>
                                    </div>
                                    <div className='privacy'>
                                        <p>Terms of Service</p>
                                    </div>
                                </div>
                                {/* <div className='login-footer-logo'>
                                    <div className="flex items-center space-x-4">
                                        <Users className="w-4 h-6 text-blue-600 login-users u-font" />
                                        <span className="text-3xl font-bold text-blue-800 enes-logo">enes</span>
                                        <span className="text-3xl font-bold text-gray-700 hr-">HR</span>
                                    </div>
                                </div> */}
                            </div>
                            <div className='mobile-view'>
                                <div className='login-footer-logo'>
                                    <div className="flex items-center space-x-4">
                                        <Users className="w-4 h-6 text-blue-600 login-users u-font" />
                                        <span className="text-3xl font-bold text-blue-800 enes-logo">enes</span>
                                        <span className="text-3xl font-bold text-gray-700 hr-">HR</span>
                                    </div>
                                </div>
                                <div className='login-footer--mobile'>
                                    <div className='privacy'>
                                        <p>Privacy Policy</p>
                                    </div>
                                    <div className='wid_'>
                                        <h4>.</h4>
                                    </div>
                                    <div className='privacy'>
                                        <p>Terms of Service</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* BACK SIDE (Domain Explanation + Footer) */}
                        <div className="flip-card-back">
                            <div className="domain-info">
                                <div className="login_details">
                                   <div className='nav-leaf'>
                                        {/* <div className='le-af'>
                                            <img src={logo} alt='' />
                                        </div> */}
                                        <div className='dropdown-logo'>
                                            <img src={logo} alt='' className='mobile-logo' />
                                        </div>
                                    </div>
                                
                                    <div className='login----text-'>
                                        <h4>What's my EnesHR domain?</h4>
                                        <div className='flip-input'>
                                            <input type='text' placeholder='https://companyeneshr.com' className='back-txt' disabled></input>
                                        </div><br />
                                        <p>Take a look at the address bar when you are logged in to EnesHR (or ask a colleague, since you are not logged in). The text just before .eneshr.com is your domain.</p>
                                    </div>
                                </div>
                                <br />
                                <button
                                    className="text-blue-600 underline cursor-pointer block mt-6 flip_link"
                                    onClick={() => setFlipped(false)}
                                >
                                    Great, thanks!
                                </button>

                            </div>


                        </div>


                    </div>

                </div>

            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Login;
