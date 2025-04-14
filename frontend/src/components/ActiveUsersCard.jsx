// frontend/src/components/ActiveUsersCard.js
import React from 'react';
import '../styles/ActiveUsersCard.scss'; // Adjust the path as necessary

const ActiveUsersCard = ({ activeUsers }) => {
  return (
    <div className="active-users-card">
      <h3>Active Users</h3>
      <div className="count">{activeUsers}</div>
    </div>
  );
};

export default ActiveUsersCard;