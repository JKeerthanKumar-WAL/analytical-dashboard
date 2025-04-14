// frontend/src/components/PageViewsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/PageViewsChart.scss'; // Adjust the path as necessary

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PageViewsChart = ({ pageViews, timestamps }) => {
  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Page Views',
        data: pageViews,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Page Views Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Views',
        },
      },
    },
  };

  return (
    <div className="page-views-chart">
      <Line data={data} options={options} height={300} />
    </div>
  );
};

export default PageViewsChart;