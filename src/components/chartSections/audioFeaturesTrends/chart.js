import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import data from '../../../data/tracks_analysis (1).json';

const colors = {
  acousticness: `rgba(34, 87, 122, 0.8)`,
  danceability: `rgba(56, 163, 165, 0.8)`,
  energy: `rgba(87, 204, 153, 0.8)`,
  instrumentalness: `rgba(128, 237, 153, 0.8)`,
  liveliness: `rgba(199, 249, 204, 0.8)`,
  speechiness: `rgba(255, 205, 178, 0.8)`,
  valence: `rgba(77, 25, 77, 0.8)`,
};

const Chart = ({ startYear, endYear }) => {
  const inputData = data['tracksStatsByYear'];

  const [acousticness, setAcousticness] = useState([]);
  const [danceability, setDanceability] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [instrumentalness, setInstrumentalness] = useState([]);
  const [liveliness, setLiveliness] = useState([]);
  const [speechiness, setSpeechiness] = useState([]);
  const [valence, setValence] = useState([]);
  const [labels, setLabels] = useState([]);

  //   canvas dataset
  const getDataset = (data, color, label) => ({
    label: label,
    fill: false,
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
    data: data,
  });

  // todo: if inputData empty, fetch and do the following
  useEffect(() => {
    // todo: check if data present
    let acousticnessTemp = [],
      danceabilityTemp = [],
      energyTemp = [],
      instrumentalnessTemp = [],
      livelinessTemp = [],
      speechinessTemp = [],
      valenceTemp = [],
      labelsTemp = [];

    inputData.map((row) => {
      if (row['year'] >= startYear && row['year'] <= endYear) {
        acousticnessTemp.push(row['acousticnessAvg']);
        danceabilityTemp.push(row['danceabilityAvg']);
        energyTemp.push(row['energyAvg']);
        instrumentalnessTemp.push(row['instrumentalnessAvg']);
        livelinessTemp.push(row['livenessAvg']);
        speechinessTemp.push(row['speechinessAvg']);
        valenceTemp.push(row['valenceAvg']);
        labelsTemp.push(row['year']);
      }
    });

    if (labelsTemp.length !== 0) {
      setAcousticness(getDataset(acousticnessTemp, colors['acousticness'], 'Average Acousticness'));
      setDanceability(getDataset(danceabilityTemp, colors['danceability'], 'Average Danceability'));
      setEnergy(getDataset(energyTemp, colors['energy'], 'Average Energy'));
      setInstrumentalness(getDataset(instrumentalnessTemp, colors['instrumentalness'], 'Average Instrumentalness'));
      setLiveliness(getDataset(livelinessTemp, colors['liveliness'], 'Average Liveliness'));
      setSpeechiness(getDataset(speechinessTemp, colors['speechiness'], 'Average Speechiness'));
      setValence(getDataset(valenceTemp, colors['valence'], 'Average Valence'));
      setLabels(labelsTemp);
    }
  }, [startYear, endYear, inputData]);

  const canvasData = {
    labels: labels,
    datasets: [acousticness, danceability, energy, instrumentalness, liveliness, speechiness, valence],
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
            labelString: 'Feature value',
          },
          ticks: {
            max: 1,
            min: 0,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        },
      ],
    },
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Line data={canvasData} width={1300} height={500} options={canvasOptions} />
    </div>
  );
};

export default Chart;
