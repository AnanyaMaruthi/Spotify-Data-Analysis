import React from "react";
import { Bar } from "react-chartjs-2";
import data from "../../../data/tracks_analysis.json";

const Chart = ({ year }) => {
  const labels = data["acousticnessDistByYear"]
    .filter((row) => row["year"] === year)
    .map((row) => row["acousticness"]);

  const inputData = [
    {
      data: data["acousticnessDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(34, 87, 122, 0.8)`,
      label: "Acousticness",
    },
    {
      data: data["energyDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(56, 163, 165, 0.8)`,
      label: "Energy",
    },
    {
      data: data["instrumentalnessDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(87, 204, 153, 0.8)`,
      label: "Instrumentalness",
    },
    {
      data: data["livenessDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(128, 237, 153, 0.8)`,
      label: "Liveliness",
    },
    {
      data: data["speechinessDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(199, 249, 204, 0.8)`,
      label: "Speechiness",
    },
    {
      data: data["valenceDistByYear"]
        .filter((row) => row["year"] === year)
        .map((row) => row["count"]),
      color: `rgba(247, 247, 182, 0.8)`,
      label: "Valence",
    },
  ];

  const getDatasets = (data) =>
    data.map((dataElement) => ({
      label: `${dataElement["label"]} - Year ${year}`,
      fill: true,
      lineTension: 0.1,
      backgroundColor: dataElement["color"],
      borderColor: dataElement["color"],
      borderCapStyle: "butt",
      pointBorderColor: "rgba(0,0,0,1)",
      pointBackgroundColor: dataElement["color"],
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: dataElement["color"],
      pointHoverBorderColor: "rgba(0,0,0,1)",
      pointHoverBorderWidth: 2,
      data: dataElement["data"],
    }));

  const canvasData = {
    labels: labels,
    datasets: getDatasets(inputData),
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
            labelString: "Count (Frequency)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Feature Value",
          },
        },
      ],
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Bar
        data={canvasData}
        width={1300}
        height={500}
        options={canvasOptions}
      />
    </div>
  );
};

export default Chart;
