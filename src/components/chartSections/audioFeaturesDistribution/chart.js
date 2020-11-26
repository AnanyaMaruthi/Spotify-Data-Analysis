import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const colors = {
  acousticness: `rgba(34, 87, 122, 0.8)`,
  danceability: `rgba(56, 163, 165, 0.8)`,
  energy: `rgba(87, 204, 153, 0.8)`,
  instrumentalness: `rgba(128, 237, 153, 0.8)`,
  liveness: `rgba(199, 249, 204, 0.8)`,
  speechiness: `rgba(255, 205, 178, 0.8)`,
  valence: `rgba(77, 25, 77, 0.8)`,
};

const Chart = ({ year, data }) => {
  const [datasets, setDatasets] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const getDatasets = (data) =>
      Object.entries(data).map(([key, value]) => {
        return {
          label: `${key} - Year ${year}`,
          fill: true,
          lineTension: 0.1,
          backgroundColor: colors[key],
          borderColor: colors[key],
          borderCapStyle: 'butt',
          pointBorderColor: 'rgba(0,0,0,1)',
          pointBackgroundColor: colors[key],
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: colors[key],
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          data: value['values'],
        };
      });
    setDatasets(getDatasets(data));
    setLabels(data['acousticness']['labels']);
  }, [data, year]);

  const canvasData = {
    labels: labels,
    datasets: datasets,
  };

  const canvasOptions = {
    maintainAspectRatio: true,
    responsive: false,
    legend: {
      position: 'right',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Count (Frequency)',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Feature Value',
          },
        },
      ],
    },
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Bar data={canvasData} width={1300} height={500} options={canvasOptions} />
    </div>
  );
};

export default Chart;
