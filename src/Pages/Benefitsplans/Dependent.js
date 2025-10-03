import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";

function Dependent() {
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
                <button className="benefit-cancel">Cancel</button>
                <button className="benefits-sub">Submit Enrollment</button>
            </div>

        </div>
    )
}

export default Dependent;