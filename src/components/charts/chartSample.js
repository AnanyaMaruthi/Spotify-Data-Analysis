import React from "react";
import { Line } from "react-chartjs-2";

const ChartSample = () => {
  //   const ref = React.createRef();
  //   ref.createLinearGradient(500, 0, 100, 0);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(500, 0, 100, 0);
    gradient.addColorStop(1, `rgba(255, 180, 162, 0.5)`);
    gradient.addColorStop(0.5, `rgba(255, 180, 162, 0.5)`);
    gradient.addColorStop(0, `rgba(107, 67, 102, 0.75)`);

    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
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
          data: [65, 59, 80, 81, 56, 55, 40],
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
