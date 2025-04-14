import React, { useState, useEffect } from 'react';
import './App.css';
import TrafficDashboard from './components/TrafficDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Website Analytics</h1>
      </header>
      <main>
        <TrafficDashboard />
      </main>
    </div>
  );
}

export default App;