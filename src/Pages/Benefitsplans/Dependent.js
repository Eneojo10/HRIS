import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dependent({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        dependents: data.dependents || []
    });

    const handleNext = (e) => {
        e.preventDefault();
        
        if (typeof onNext === 'function') {
            onNext(formData);
        }
    };
    return (
        <div>
            <div className='dependants' style={{ display: "flex", justifyContent: "space-between", marginTop: '20px' }}>
                <div>
                    <h4>Add Dependents</h4>
                    <p>Add family members to your benefits coverage</p>
                </div>

                <div>
                    <button className='ben-add'>Add Department</button>
                </div>
            </div>
            <div className='perosnal'>
                <div className='depend-icons' style={{ marginTop: '50px', textAlign: 'center' }}>
                    <div className='dependent-box' style={{ fontSize: '42px', textAlign: 'center', color: '#9ca3af' }}>
                        <IoPeopleOutline />
                    </div>
                    <h4>No dependents added yet</h4>
                    <p>Click "Add Dependent" to include family members</p>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

            </div>
            <br/>
            <div className="bb-buttons">
                <button type='button' className="benefit-cancel" onClick={onClose}>Cancel</button>
                <button type='button' className="benefits-sub" onClick={handleNext}>Next</button>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />

        </div>
    )
}

export default Dependent;