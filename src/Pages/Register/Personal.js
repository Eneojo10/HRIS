import React, { useState, useEffect, useRef } from 'react';
import { IoPerson } from "react-icons/io5";
import { BiExport } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Personal({ data = {}, onNext, onClose }) {
    const [gender, setGender] = useState([]);
    const [country, setCountry] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        email: data.email || "",
        phone: data.phone || "",
        gender_id: data.gender_id || "",
        address: data.address || "",
        city: data.city || "",
        state: data.state || "",
        zip_code: data.zip_code || "",
        dob: data.dob || "",
        country_id: data.country_id || "",
    });

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast.error('Image size should be less than 5MB');
                return;
            }

            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                toast.error('Only JPG, JPEG and PNG files are allowed');
                return;
            }

            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.firstname || !formData.lastname || !formData.email ||
            !formData.phone || !formData.gender_id || !formData.dob || !formData.country_id) {
            toast.error("Please fill all required fields");
            return;
        }

        console.log("Personal.handleSubmit: calling onNext", { hasOnNext: !!onNext, formData });

        if (typeof onNext === 'function') {
            onNext(formData);
        } else {
            console.warn("Personal: onNext prop is not provided or not a function", onNext);
        }
    };

    useEffect(() => {
        const fetchGender = async () => {
            try {
                const headers = getAuthHeaders();
                const res = await axios.get(`${BASE_URL}/gender`, { headers });
                setGender(Array.isArray(res.data) ? res.data : res.data.data || []);
            } catch (err) {
                console.error("Gender fetch failed", err);
                setGender([]);
            }
        };
        fetchGender();
    }, []);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const headers = getAuthHeaders();
                const res = await axios.get(`${BASE_URL}/countries`, { headers });
                setCountry(Array.isArray(res.data) ? res.data : res.data.data || []);
            } catch (err) {
                console.error("Country fetch failed", err);
                setCountry([]);
            }
        };
        fetchCountry();
    }, []);

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="scrollable">
                <div className="perosnal">
                    <div className="personal-details">
                        <div className="per-sonal-flex">
                            <div className="pee-icon"><IoPerson /></div>
                            <h3>Personal Information</h3>
                        </div>

                        <div className="personimage-holder">
                            <div className="personal-bg-1"></div>
                            <div className="image-border" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/jpeg,image/jpg,image/png"
                                    style={{ display: 'none' }}
                                />
                                <div className="imgae-holder">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        <>
                                            <BiExport />
                                            <h4>Upload Photo</h4>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='person-input-fields'>
                            <div className="per-input">
                                <label>First Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                            </div>
                            <div className="per-input">
                                <label>Last Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                            </div>


                        </div>
                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Email<span style={{ color: 'red' }}>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="per-input">
                                <label>Phone<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Date of Birth<span style={{ color: 'red' }}>*</span></label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} max={new Date().toISOString().split("T")[0]} />
                            </div>
                            <div className="per-input">
                                <label>Gender<span style={{ color: 'red' }}>*</span></label>
                                <select name="gender_id" value={formData.gender_id} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    {gender.map(gen => (
                                        <option key={gen._id} value={gen._id}>{gen.gender}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="per--input">
                            <label>Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} />
                        </div>

                        <div className="postal-code" style={{ marginTop: '10px' }}>
                            <div className="city-one">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                            </div>
                            <div className="city-one">
                                <label>State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} />
                            </div>
                            <div className="city-one">
                                <label>ZIP</label>
                                <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
                            </div>
                            <div className="city-one">
                                <label>Country<span style={{ color: 'red' }}>*</span></label>
                                <select name="country_id" value={formData.country_id} onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    {country.map(c => (
                                        <option key={c._id} value={c._id}>{c.country}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="employee-option-btn">
                            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                            <button type="button" className="cancel-btnn" onClick={handleSubmit}>Next</button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
