# Real-Time Analytics Dashboard

This project is a real-time analytics dashboard for monitoring website traffic metrics: Active Users, Page Views, and Average Session Duration.

## Instructions to Run Locally

1.  **Backend:**
    * Navigate to the `backend` folder: `cd backend`
    * Install dependencies: `npm install`
    * Start the backend server: `npm start` (This will run on `http://localhost:5000`)

2.  **Frontend:**
    * Navigate to the `frontend` folder: `cd frontend`
    * Install dependencies: `npm install`
    * Start the frontend development server: `npm start` (This will usually run on `http://localhost:3000`)

3.  Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Technologies/Libraries Used

**Frontend (React):**
* React: JavaScript library for building user interfaces.
* Create React App: Toolchain for setting up a React development environment.
* Chart.js: JavaScript charting library.
* react-chartjs-2: React wrapper for Chart.js.
* SCSS: CSS preprocessor for styling.

**Backend (Node.js):**
* Node.js: JavaScript runtime environment.
* Express: Minimalist web application framework for Node.js.
* cors: Node.js package for providing Connect/Express middleware that can be used to enable CORS.

## Summary of Challenges, Assumptions, and Improvements

**Challenges:**
* Simulating realistic dynamic data.
* Ensuring smooth updates on the frontend.
* Designing a clean and responsive UI within the time constraints.

**Assumptions:**
* The average session duration is a simple numerical value representing seconds.
* The backend API will always be available at `http://localhost:5000/api/traffic`.
* For the page views chart, we are displaying the last 10 data points for simplicity.

**Potential Improvements:**
* Implement WebSocket for real-time data streaming instead of polling for better performance and lower latency.
* Add more sophisticated mock data generation logic to simulate different traffic patterns.
* Improve the UI with more advanced styling and user interactions.
* Implement unit and integration tests.
* Consider using a state management library like Redux or Zustand for more complex frontend state.
* Explore different charting libraries for more advanced chart types and customization.
* Implement error handling and loading states in the frontend.

## Architecture Document

See `architecture.md`