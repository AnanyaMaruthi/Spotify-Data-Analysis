import React from 'react';
import { Radar } from 'react-chartjs-2';

const OvelappingChart = ({ data }) => {
  const colors = [
    `rgba(34, 87, 122, 0.75)`,
    `rgba(87, 204, 153, 0.75)`,
    `rgba(77, 25, 77, 0.75)`,
    `rgba(255, 205, 178, 0.75)`,
    `rgba(128, 237, 153, 0.75)`,
    `rgba(199, 249, 204, 0.75)`,
    `rgba(56, 163, 165, 0.75)`,
  ];

  const labels = ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'];

  const getDatsets = (data) => {
    return data.map((row, index) => ({
      label: row['name'],
      fill: true,
      lineTension: 0.1,
      backgroundColor: colors[index],
      borderColor: colors[index],
      borderCapStyle: 'butt',
      pointBorderColor: colors[index],
      pointBackgroundColor: colors[index],
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: colors[index],
      pointHoverBorderColor: 'rgba(0,0,0,1)',
      pointHoverBorderWidth: 2,
      data: [
        row['acousticness'],
        row['danceability'],
        row['energy'],
        row['instrumentalness'],
        row['liveness'],
        row['speechiness'],
        row['valence'],
      ],
    }));
  };

  const canvasData = {
    labels: labels,
    datasets: getDatsets(data),
  };

  const canvasOptions = {
    maintainAspectRatio: true,
    responsive: false,
    legend: {
      position: 'bottom',
    },
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        min: 0,
        max: 1,
        stepSize: 0.1,
      },
    },
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '45px' }}>
      <Radar data={canvasData} width={700} height={400} options={canvasOptions} />
    </div>
  );
};

export default OvelappingChart;
