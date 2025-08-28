import React, { useState } from 'react';
import { Users } from "lucide-react";
import { Link } from 'react-router-dom';

function Login() {
    const [flipped, setFlipped] = useState(false);

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
                                    <div className="flex items-center space-x-4">
                                        <Users className="w-8 h-8 text-blue-600 login-users" />
                                        <span className="text-3xl font-bold text-blue-800 enes">enes</span>
                                        <span className="text-3xl font-bold text-gray-700 hr">HR</span>
                                    </div>
                                    <br /><br />
                                    <div className='login----text'>
                                        <h4>Enter your EnesHR Domain to login.</h4>
                                    </div>
                                </div>

                                <div className='input-flex'>
                                    <div className='iput-flex-1'>
                                        <input type="text" placeholder="companydomain" className="login-input" />
                                    </div>
                                    <div className='enes-p'>
                                        <p>.eneshr.com</p>
                                    </div>
                                </div>

                                <div className='domain-text'>
                                    <div>
                                        <button className="login-button">Continue</button>
                                    </div>
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
                                <div className='login-footer-logo'>
                                    <div className="flex items-center space-x-4">
                                        <Users className="w-4 h-6 text-blue-600 login-users u-font" />
                                        <span className="text-3xl font-bold text-blue-800 enes-logo">enes</span>
                                        <span className="text-3xl font-bold text-gray-700 hr-">HR</span>
                                    </div>
                                </div>
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
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-8 h-8 text-blue-600 login-users" />
                                        <span className="text-3xl font-bold text-blue-800 enes">enes</span>
                                        <span className="text-3xl font-bold text-gray-700 hr">HR</span>
                                    </div>
                                    <br /><br />
                                    <div className='login----text-'>
                                        <h4>What's my EnesHR domain?</h4>
                                        <div className='flip-input'>
                                            <input type='text' placeholder='https://companyeneshr.com'className='back-txt' disabled></input>
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
        </div>
    )
}

export default Login;
