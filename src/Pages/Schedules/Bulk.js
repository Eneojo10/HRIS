import React from 'react'
import { RxCopy } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

function Bulk() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='bulk--button' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <div>
                                <h4>Bulk Scheduling</h4>
                                <p>Create multiple shifts at once</p>
                            </div>
                            <button className='shi-ft-btn'>Add Shift</button>
                        </div>
                        <br />
                        <div className='perosnal'style={{borderLeft:'4px solid #3b82f6'}}>
                            <div className='personal-details' style={{marginTop:'20px'}}>
                                <div className='bulk-delete' style={{ display: 'flex',justifyContent:'space-between' }}>
                                    <div>
                                        <p>Shift 1</p>
                                    </div>
                                    <div className='bulks----icons'style={{display:'flex'}}>
                                        <div>
                                            <RxCopy />
                                        </div>
                                        <div>
                                            <AiOutlineDelete />
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                lo
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bulk