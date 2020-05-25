import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="ContactInformation">

      <div className="ContactInformation_Grid_Left">
        <div>
          <p>OFFICE HOURS</p>
          <p>Monday 8 AM - 5 PM</p>
          <p>Tuesday 8 AM - 5 PM</p>
          <p>Wednesday 8 AM - 5 PM</p>
          <p>Thursday 8 AM - 12 PM</p>
        </div>
      </div>

      <div className="ContactInformation_Grid_Middle">
        <div>
          <p>LOCATION</p>
          <p>3819 NE 45th St Suite C</p>
          <p>Seattle, WA 98105</p>
        </div>
      </div>

      <div className="ContactInformation_Grid_Right">
        <div>
          <p>MAP</p>
        </div>
      </div>

    </div>
  );
}

export default ContactInfo;