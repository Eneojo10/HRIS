import React from 'react'
import image from '../Images/user2.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { ThumbsUp } from 'lucide-react';



function Feedback() {
  return (
    <div>
      <div className='performance-background'>
        <div className='goals-cards'>
          {/* --- Repeated stat cards --- */}
          {[
            { title: "Active Reviews", subtitle: "In progress this cycle" },
            { title: "Goals Completed", subtitle: "This quarter" },
            { title: "Avg Performance Score", subtitle: "Out of 5.0" },
            { title: "Overdue Reviews", subtitle: "Need attention" },
            { title: "Feedback Requests", subtitle: "Pending responses" },
            { title: "Review Completion", subtitle: "This cycle" },
          ].map((card, i) => (
            <div className='g-cards1' key={i}>
              <div className='flex-one'>
                <div className='flex1'>

                  <div className='twelve'>
                    <p>+12%</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>156</h2>
                  <p>{card.title}</p>
                  <span>{card.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <br />
        <div className='per-for-mance'>
          <div className='gt'>
            <h2>Feedback Center</h2>
          </div>
          <br /><br />
          <div className='feedback-cards' style={{ display: 'flex', gap: '10px' }}>
            <div className='feedback-card1'>
              <div className='feedback-card-flex' style={{ width: '90%', margin: 'auto', }}>
                <div className='fedflex' style={{ display: 'flex', gap: '20px', marginBottom: '15px', marginTop: '10px' }}>
                  <div className='pend-icon'>
                    <IoMdTime />
                  </div>
                  <div className='pen--ding'>
                    <h2>Pending Request</h2>
                  </div>
                </div>
                <div className='fed-inside-border'>
                  <div className='feedback-inside' style={{ width: '90%', margin: 'auto', display: 'flex', marginTop: '25px' }}>
                    <div className='feed-user-images' style={{ display: 'flex', width: '75%', gap: '10px' }}>
                      <div className='fedd-image'>
                        <img src={image} alt='img' className='feed-img' />
                      </div>
                      <div className='name-designation'>
                        <h4>David Rodriguez</h4>
                        <p>Product Manager</p>
                      </div>
                    </div>

                    <div className='pend---time'>
                      <div className='p-ending' style={{ display: 'flex', gap: '5px' }}>
                        <div>
                          <IoMdTime />
                        </div>
                        <div className='fed_pen_ding'>
                          <h4>Pending</h4>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='feed-request' style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <div>
                      <p>Requested by Sarah Johnson</p>
                    </div>
                    <div>
                      <p>Due: 2024-02-20</p>
                    </div>
                  </div>
                  <div className='collabaration' style={{ width: '90%', margin: 'auto' }}>
                    <div className='colabo'>
                      <h4>Collaboration</h4>
                    </div>
                    <textarea className='colab-text' placeholder='Provide your feedback...'></textarea>

                    <div className='star-submit' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className='star__icon'>
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                      </div>
                      <div>
                        <button className='submit-feedback'>Submit Feedback</button>
                      </div>
                    </div>
                    <br />
                  </div>


                </div>
                <div className='fed-inside-border'>
                  <div className='feedback-inside' style={{ width: '90%', margin: 'auto', display: 'flex', marginTop: '25px' }}>
                    <div className='feed-user-images' style={{ display: 'flex', width: '75%', gap: '10px' }}>
                      <div className='fedd-image'>
                        <img src={image} alt='img' className='feed-img' />
                      </div>
                      <div className='name-designation'>
                        <h4>Emily Chen</h4>
                        <p>UX Designer</p>
                      </div>
                    </div>

                    <div className='pend---times'>
                      <div className='p-ending' style={{ display: 'flex', gap: '5px' }}>
                        <div>
                          <IoMdCheckmarkCircleOutline />
                        </div>
                        <div className='fed_pen_dings'>
                          <h4>Completed</h4>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='feed-request' style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <div>
                      <p>Requested by Sarah Johnson</p>
                    </div>
                    <div>
                      <p>Due: 2024-02-20</p>
                    </div>
                  </div>
                  <div className='collabaration' style={{ width: '90%', margin: 'auto' }}>
                    <div className='colabo'>
                      <h4>Design skills</h4>
                    </div>


                    <div className='star-submit' style={{ display: 'flex', justifyContent: 'space-between', width: '45%' }}>
                      <div>
                        <h4>Rating:</h4>
                      </div>
                      <div className='star__icon' style={{ color: '#ecb91d' }}>
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                      </div>

                    </div>
                    <br />
                  </div>


                </div>
              </div>
              <br />

            </div>
            <div className='feedback-card1'>
              <div className='feedback-card-flex' style={{ width: '90%', margin: 'auto', }}>
                <div className='fedflex' style={{ display: 'flex', gap: '20px', marginBottom: '15px', marginTop: '10px' }}>
                  <div className='pend--icon'>
                    <MdOutlineFeedback />
                  </div>
                  <div className='pen--ding'>
                    <h2>Recent Feedback</h2>
                  </div>
                </div>
                <div className='fed-inside-border'>
                  <div className='feedback-inside' style={{ width: '90%', margin: 'auto', display: 'flex', marginTop: '25px' }}>
                    <div className='feed-user-images' style={{ display: 'flex', width: '75%', gap: '10px' }}>
                      <div className='fedd-image'>
                        <img src={image} alt='img' className='feed-img' />
                      </div>
                      <div className='name-designation'>
                        <h4>Lisa Wang </h4>
                        <p>to Sarah Johnson</p>
                      </div>
                    </div>

                    <div className='pend---ti-me'>
                      <div className='p-ending' style={{ display: 'flex', gap: '5px' }}>
                        <div className='thumbs-up'>
                          <ThumbsUp />
                        </div>
                        <div className='star__ic-on' style={{ color: '#ecb91d' }}>
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className='collabaration' style={{ width: '90%', margin: 'auto' }}>
                    <div className='col_abo'>
                      <h4>Campaign Performance</h4>
                    </div>
                    <div>
                      <p>Excellent work on the Q1 marketing campaign. The creative approach and execution exceeded expectations, resulting in a 35% increase in engagement.</p>
                      <span className='feed_date'>2024-02-12</span>
                    </div>


                    <br />
                  </div>


                </div>
                <div className='fed-inside-border'>
                  <div className='feedback-inside' style={{ width: '90%', margin: 'auto', display: 'flex', marginTop: '25px' }}>
                    <div className='feed-user-images' style={{ display: 'flex', width: '75%', gap: '10px' }}>
                      <div className='fedd-image'>
                        <img src={image} alt='img' className='feed-img' />
                      </div>
                      <div className='name-designation'>
                        <h4>Lisa Wang </h4>
                        <p>to Alex Thompson</p>
                      </div>
                    </div>

                    <div className='pend---ti-me'>
                      <div className='p-ending' style={{ display: 'flex', gap: '5px' }}>
                        <div className='thumbs--up'>
                          <MdOutlineFeedback />
                        </div>
                        <div className='star__ic-on' style={{ color: '#ecb91d' }}>
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                          <IoIosStarOutline />
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className='collabaration' style={{ width: '90%', margin: 'auto' }}>
                    <div className='col_aboo'>
                      <h4>Code Review</h4>
                    </div>
                    <div>
                      <p>Great technical implementation. For future projects, consider adding more inline comments for better code maintainability.</p>
                      <span className='feed_date'>2024-02-12</span>
                    </div>


                    <br />
                  </div>


                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Feedback