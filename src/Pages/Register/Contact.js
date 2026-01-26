import React, { useState, useEffect } from 'react'
import { FiPhone } from "react-icons/fi";
import { BASE_URL } from '../Utils/globals';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ data = {}, onNext, onClose }) {
    const [relationship, setRelates] = useState([])
    const [relationship_id, setRelate] = useState("");

    
    const [FormData, setFormData] = useState({
        relationship_id: data.relationship_id || "",
        contact_name: data.contact_name || "",
        phone_no: data.phone_no || "",
    });

    useEffect(() => {
        const fetchRelate = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/relationship`);
                console.log(response);
                setRelates(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Relationship fetch failed", error);
                setRelates([]);
            }
        };

        fetchRelate();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!FormData.contact_name || !FormData.phone_no || !FormData.relationship_id) {
             toast.error("Please fill in all required fields");
            return;
        }

        console.log("Contact.handleSubmit: calling onNext", { hasOnNext: !!onNext, FormData });

        if (typeof onNext === 'function') {
            onNext(FormData);
        } else {
            console.warn("Contact: onNext prop is not provided or not a function", onNext);
        }
    };



    return (
        <div>

            <ToastContainer position="top-right" autoClose={3000} />


            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px' }}>
                                <FiPhone />
                            </div>
                            <div>
                                <h3>Emergency Contact</h3>
                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Contact Name</label>
                                <input type='text' placeholder='Full name'name='contact_name'value={FormData.contact_name}onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Phone number</label>
                                <input type='text' placeholder='Phone number'name='phone_no'value={FormData.phone_no}onChange={handleChange}></input>
                            </div>
                            <div className='per-input'>
                                <label>Relationship</label>
                                <select name='relationship_id' value={FormData.relationship_id} onChange={handleChange}>
                                    <option>Select relationship</option>
                                    {relationship.map(e => (
                                        <option key={e._id} value={e._id}>{e.relationship}</option>
                                    ))}

                                </select>
                            </div>


                        </div>
                        <div className='employee-option-btn'>
                            <button className='cancel-btn' type='button' onClick={onClose}>Cancel</button>
                            <button className='cancel-btnn' type='button' onClick={handleSubmit}>Next</button>
                        </div>

                    </div>
                    <br />

                </div>

            </div>
        </div>
    )
}

export default Contact