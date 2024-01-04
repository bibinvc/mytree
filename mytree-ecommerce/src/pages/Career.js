// Career.js
import React from 'react';
import './Career.css'; // Import the CSS file


const Career = () => {
  return (
    <div className="career-container">
      <h2>Career Opportunities</h2>
      <p>
        We're always looking for talented individuals to join our team. If you're passionate about what you do and
        want to be part of an innovative company, check out our current job openings.
      </p>
      <div className="job-openings">
        {/* List job openings or display a message if there are none */}
        <p>No current job openings.</p>
      </div>
      {/* Add additional sections or functionality as needed */}
    </div>
  );
};

export default Career;
