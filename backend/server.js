const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Function to generate mock traffic data
const generateMockData = () => {
  const now = new Date().toISOString();
  const active_users = Math.floor(Math.random() * 100) + 50; // Random between 50 and 149
  const page_views = Math.floor(Math.random() * 200) + 100;   // Random between 100 and 299
  const avg_session_duration = parseFloat((Math.random() * 5 + 2).toFixed(1)); // Random between 2.0 and 6.9
  return {
    timestamp: now,
    active_users: active_users,
    page_views: page_views,
    avg_session_duration: avg_session_duration,
  };
};

// API endpoint for fetching traffic data (for polling)
app.get('/api/traffic', (req, res) => {
  const mockData = generateMockData();
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});