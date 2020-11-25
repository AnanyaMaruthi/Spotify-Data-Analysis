import React from 'react';
import { Radar } from 'react-chartjs-2';

const Chart = ({ trackData, trackName, labels }) => {
  const color = `rgba(56, 163, 165, 0.5)`;

  const canvasData = {
    labels: labels,
    datasets: [
      {
        label: trackName,
        fill: true,
        lineTension: 0.1,
        backgroundColor: color,
        borderColor: color,
        borderCapStyle: 'butt',
        pointBorderColor: color,
        pointBackgroundColor: color,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: 'rgba(0,0,0,1)',
        pointHoverBorderWidth: 2,
        data: trackData,
      },
    ],
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
    animation: {
      duration: 0,
    },
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '45px' }}>
      <Radar data={canvasData} width={700} height={400} options={canvasOptions} />
    </div>
  );
};

export default Chart;
