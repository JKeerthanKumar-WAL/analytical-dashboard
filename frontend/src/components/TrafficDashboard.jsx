// frontend/src/components/TrafficDashboard.js
import React, { useState, useEffect } from 'react';
import ActiveUsersCard from './ActiveUsersCard';
import PageViewsChart from './PageViewsChart';
import SessionDurationGauge from './SessionDurationGauge';
import '../styles/TrafficDashboard.scss'; // Adjust the path as necessary

const TrafficDashboard = () => {
  const [trafficData, setTrafficData] = useState({
    active_users: 0,
    page_views: [],
    avg_session_duration: 0,
    timestamps: [],
  });

  useEffect(() => {
    const fetchTrafficData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/traffic');
        const data = await response.json();
        setTrafficData((prevData) => ({
          active_users: data.active_users,
          page_views: [...prevData.page_views.slice(-9), data.page_views], // Keep last 10 data points
          avg_session_duration: data.avg_session_duration,
          timestamps: [...prevData.timestamps.slice(-9), new Date(data.timestamp).toLocaleTimeString()],
        }));
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };

    fetchTrafficData(); // Initial fetch
    const intervalId = setInterval(fetchTrafficData, 3000); // Fetch every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="traffic-dashboard">
      <div className="metric-cards">
        <ActiveUsersCard activeUsers={trafficData.active_users} />
        <SessionDurationGauge avgSessionDuration={trafficData.avg_session_duration} />
      </div>
      <div className="charts">
        <PageViewsChart pageViews={trafficData.page_views} timestamps={trafficData.timestamps} />
      </div>
    </div>
  );
};

export default TrafficDashboard;