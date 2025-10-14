import React from 'react';

function Performsettings() {
  return (
    <div>
      <div className='scrollable'>
        <div className='Performsettings'>
          <div className='perfom-s'>
            <div className='r-settings'>
              <h4>Review Settings</h4><br />

              <div className='r-setting-flex'>
                <div>
                  <p>Enable Self Review</p>
                </div>
                <input type='checkbox'  />
              </div>

              <div className='r-setting-flex'>
                <div>
                  <p>Enable Peer Review</p>
                </div>
                <input type='checkbox'  />
              </div>

              <div className='r-setting-flex'>
                <div>
                  <p>Manager Review Required</p>
                </div>
                <input type='checkbox' defaultChecked />
              </div>

              <div className='r-setting-flex'>
                <div>
                  <p>Skip Level Review</p>
                </div>
                <input type='checkbox'  />
              </div>
            </div>
          </div>

          <div className='perfom-s'>
            <div className='r-settings'>
              <h4>Notifications</h4><br />

              <div className='r-setting-flex'>
                <div>
                  <p>Email Employee</p>
                </div>
                <input type='checkbox' defaultChecked />
              </div>

              <div className='r-setting-flex'>
                <div>
                  <p>Email Manager</p>
                </div>
                <input type='checkbox' defaultChecked />
              </div>

              <div className='r-setting-flex'>
                <div>
                  <p>Send Reminders</p>
                </div>
                <input type='checkbox' defaultChecked />
              </div>

              <div className='r-setting-flex'>
                <div className='remember'>
                  <p>Reminder Days Before Due</p>
                  <input type='number' placeholder='7' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='perosnal'><br />
          <div className='personal-details'>
            <div>
              <h4>Additional Notes</h4>
            </div>
            <br />

            <div className='pero-snal'>
              <textarea></textarea>
            </div>
          </div>
          <br />
        </div>
        <br />
      </div>
    </div>
  );
}

export default Performsettings;
