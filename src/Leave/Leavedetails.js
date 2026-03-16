import React, { useState } from 'react'
import image from '../Images/user2.jpg'
import { GoComment } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Pages/Utils/globals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Leavedetails() {
    const [showModal, setShowModal] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleViewDocument = (docUrl) => {
        setSelectedDocument(docUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDocument(null);
    };

    const handleApprove = async (leaveId) => {
        try {
            const headers = getAuthHeaders();
            console.log('Approving leave with ID:', leaveId);
            const response = await axios.put(`${BASE_URL}/leave/${leaveId}`, {
                status: 'Approved',
                approved: true,
                reject: false
            }, { headers });
            console.log('Approve response:', response.data);
            toast.success('Leave request approved');
            setTimeout(() => window.location.reload(), 1500);
        } catch (error) {
            console.error('Error approving leave:', error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.response?.data?.error || 'Failed to approve leave request');
        }
    };

    const handleReject = async (leaveId) => {
        try {
            const headers = getAuthHeaders();
            console.log('Rejecting leave with ID:', leaveId);
            const response = await axios.put(`${BASE_URL}/leave/${leaveId}`, {
                status: 'Rejected',
                approved: false,
                reject: true
            }, { headers });
            console.log('Reject response:', response.data);
            toast.success('Leave request rejected');
            setTimeout(() => window.location.reload(), 1500);
        } catch (error) {
            console.error('Error rejecting leave:', error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.response?.data?.error || 'Failed to reject leave request');
        }
    };

    const LeaveCard = ({ leaveId, employeeName, position, dateRange, days, leaveType, status, reason, appliedDate, manager, documentUrl }) => (
        <div className='leave-comments_box'>
            <div className='l--flex' style={{ display: 'flex', width: '95%', margin: 'auto', justifyContent: 'space-between', marginTop: '20px' }}>

                <div className='leave_image' style={{ display: 'flex', gap: '15px' }}>
                    <div className='lp'>
                        <img src={image} alt='' />
                    </div>
                    <div className='johnson'>
                        <h3>{employeeName}</h3>
                        <p>{position}</p>
                        <div className='days-holder' style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
                            <div className='cdate' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <SlCalender />
                                </div>
                                <div>
                                    <p>{dateRange}</p>
                                </div>
                            </div>
                            <div className='days' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <IoTimeOutline />
                                </div>
                                <div>
                                    <p>{days} days</p>
                                </div>
                            </div>
                        </div>
                        <div className='annual-leave' style={{ display: 'flex', gap: '17px', marginBottom: '7px' }}>
                            <div className='A' style={{ backgroundColor: '#dbeafe', height: '20px', width: '35%', textAlign: 'center', borderRadius: '16px', color: '#1e40af' }}>
                                <p>{leaveType}</p>
                            </div>
                            <div className='p' style={{ border: '1px solid #ec7223', height: '20px', width: '25%', borderRadius: '16px', textAlign: 'center' }}>
                                <p>{status}</p>
                            </div>
                        </div>
                        <h4><span className='reason'>Reason:</span> {reason}</h4>
                        <p>Applied on {appliedDate} • Manager: {manager}</p>
                    </div>
                </div>
                <div className='cra' style={{ display: 'flex', width: '90%', gap: '10px' }}>
                    {documentUrl && (
                        <div className='document' style={{ cursor: 'pointer' }} onClick={() => handleViewDocument(documentUrl)}>
                            <div className='comment-icon' style={{ marginTop: '10px', fontSize: '20px', color: '#2563eb' }}>
                                <MdOutlineDescription />
                            </div>
                        </div>
                    )}
                    <div className='reject'>
                        <div className='comm' style={{ display: 'flex', width: '82%', margin: 'auto', justifyContent: 'space-between' }}>
                            <div className='comment-icon' style={{ marginTop: '10px' }}>
                                <GoComment />
                            </div>
                            <h4>Comment</h4>
                        </div>
                    </div>
                    <div className='reject-two'>
                        <div className='comm' style={{ display: 'flex', width: '82%', margin: 'auto', justifyContent: 'space-between', color: 'red', cursor: 'pointer' }} onClick={() => handleReject(leaveId)}>
                            <div className='comment-icon' style={{ marginTop: '10px' }}>
                                <FcCancel />
                            </div>
                            <h4>Reject</h4>
                        </div>
                    </div>
                    <div className='approve'>
                        <div className='comm' style={{ display: 'flex', width: '82%', margin: 'auto', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => handleApprove(leaveId)}>
                            <div className='comment-icon' style={{ marginTop: '10px' }}>
                                <IoCheckmark />
                            </div>
                            <h4>Approve</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className='leave-tags'>
                <div>
                    <h3>Leave Request</h3>
                </div>
                <div className='leave_tags'>
                    <div className="custom-select-wrapper">
                        <select id="status-select" className="custom-select">
                            <option value="">All Status</option>
                            <option value="active">Pending</option>
                            <option value="inactive">Approved</option>
                            <option value="pending">Rejected</option>
                        </select>
                    </div>
                    <div className="custom-select-wrapper">
                        <select id="status-select" className="custom-select">
                            <option value="">All Types</option>
                            <option value="active">Annual Leave</option>
                            <option value="inactive">Sick Leave</option>
                            <option value="pending">Personal Leave</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />

            <LeaveCard
                leaveId="leave_id_1"
                employeeName="Sarah Johnson"
                position="Senior Developer • Engineering"
                dateRange="2024-02-15 - 2024-02-19"
                days="5"
                leaveType="Annual Leave"
                status="Pending"
                reason="Family vacation"
                appliedDate="2024-01-28"
                manager="John Smith"
                documentUrl="https://via.placeholder.com/400x300?text=Leave+Document"
            />
            <br />

            <LeaveCard
                leaveId="leave_id_2"
                employeeName="Sarah Johnson"
                position="Senior Developer • Engineering"
                dateRange="2024-02-15 - 2024-02-19"
                days="5"
                leaveType="Annual Leave"
                status="Pending"
                reason="Family vacation"
                appliedDate="2024-01-28"
                manager="John Smith"
                documentUrl="https://via.placeholder.com/400x300?text=Leave+Document"
            />
            <br />

            <LeaveCard
                leaveId="leave_id_3"
                employeeName="Sarah Johnson"
                position="Senior Developer • Engineering"
                dateRange="2024-02-15 - 2024-02-19"
                days="5"
                leaveType="Annual Leave"
                status="Pending"
                reason="Family vacation"
                appliedDate="2024-01-28"
                manager="John Smith"
                documentUrl="https://via.placeholder.com/400x300?text=Leave+Document"
            />
            <br />

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        maxWidth: '600px',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        position: 'relative'
                    }}>
                        <button
                            onClick={handleCloseModal}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }}
                        >
                            ✕
                        </button>
                        <h3 style={{ marginTop: '0', marginBottom: '15px' }}>Leave Request Document</h3>
                        <img
                            src={selectedDocument}
                            alt="Leave Document"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                </div>
            )}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Leavedetails
