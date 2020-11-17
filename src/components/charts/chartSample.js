import React from "react";
import { Line } from "react-chartjs-2";
import json from "../../data/tracks_analysis.json";

let jsonData = json["acousticnessDistByYear"];
jsonData = jsonData.filter((row) => row["year"] === 1921);
console.log(jsonData);
const ChartSample = () => {
  //   const ref = React.createRef();
  //   ref.createLinearGradient(500, 0, 100, 0);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(500, 0, 100, 0);
    gradient.addColorStop(1, "#1d3557");
    gradient.addColorStop(0, "#83c5be");
    // gradient.addColorStop(1, "#fdfcdc");
    return {
      // labels: ["January", "February", "March", "April", "May", "June", "July"],
      labels: jsonData.map((row) => row["acousticness"]),
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.1,
          backgroundColor: gradient,
          borderColor: gradient,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(0,0,0,1)",
          pointBackgroundColor: gradient,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: gradient,
          pointHoverBorderColor: "rgba(0,0,0,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // data: [65, 59, 80, 81, 56, 55, 40],
          data: jsonData.map((row) => row["count"]),
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: true,
    responsive: false,
  };
  return (
    <div>
      <Line data={data} width={500} height={250} options={options} />
    </div>
  );
};

export default ChartSample;
