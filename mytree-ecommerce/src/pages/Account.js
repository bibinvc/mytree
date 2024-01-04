// Account.js
import React from 'react';
import './Account.css'; // Import the CSS file

const Account = () => {
  // Placeholder user information
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    // Add more user details as needed
  };

  return (
    <div className="account-container">
      <h2>Your Account</h2>
      <div className="user-details">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {/* Add more user details here */}
      </div>
      {/* Add additional sections or functionality as needed */}
    </div>
  );
};

export default Account;
