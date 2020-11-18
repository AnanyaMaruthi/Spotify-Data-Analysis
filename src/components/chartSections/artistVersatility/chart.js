import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const colors = {
  acousticness: `rgba(34, 87, 122, 0.8)`,
  danceability: `rgba(56, 163, 165, 0.8)`,
  energy: `rgba(87, 204, 153, 0.8)`,
  instrumentalness: `rgba(128, 237, 153, 0.8)`,
  liveliness: `rgba(199, 249, 204, 0.8)`,
  speechiness: `rgba(255, 205, 178, 0.8)`,
  valence: `rgba(77, 25, 77, 0.8)`,
};

const Chart = ({ data }) => {
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
    borderCapStyle: "butt",
    pointBorderColor: color,
    pointBackgroundColor: color,
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: "rgba(0,0,0,1)",
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

    data.map((row) => {
      acousticnessTemp.push(row["acousticness"]);
      danceabilityTemp.push(row["danceability"]);
      energyTemp.push(row["energy"]);
      instrumentalnessTemp.push(row["instrumentalness"]);
      livelinessTemp.push(row["liveness"]);
      speechinessTemp.push(row["speechiness"]);
      valenceTemp.push(row["valence"]);
      labelsTemp.push(row["name"]);
      return 0;
    });

    if (labelsTemp.length !== 0) {
      setAcousticness(
        getDataset(acousticnessTemp, colors["acousticness"], "Acousticness")
      );
      setDanceability(
        getDataset(danceabilityTemp, colors["danceability"], "Danceability")
      );
      setEnergy(getDataset(energyTemp, colors["energy"], "Energy"));
      setInstrumentalness(
        getDataset(
          instrumentalnessTemp,
          colors["instrumentalness"],
          "Instrumentalness"
        )
      );
      setLiveliness(
        getDataset(livelinessTemp, colors["liveliness"], "Liveliness")
      );
      setSpeechiness(
        getDataset(speechinessTemp, colors["speechiness"], "Speechiness")
      );
      setValence(getDataset(valenceTemp, colors["valence"], "Valence"));
      setLabels(labelsTemp);
    }
  }, [data]);

  const canvasData = {
    labels: labels,
    datasets: [
      acousticness,
      danceability,
      energy,
      instrumentalness,
      liveliness,
      speechiness,
      valence,
    ],
  };

  const canvasOptions = {
    maintainAspectRatio: true,
    responsive: false,
    legend: {
      position: "right",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Feature value",
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
            labelString: "Song",
          },
        },
      ],
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Line
        data={canvasData}
        width={1300}
        height={500}
        options={canvasOptions}
      />
    </div>
  );
};

export default Chart;
