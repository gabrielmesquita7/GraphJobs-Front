import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: [
    "Desenvolvimento Web",
    "Inteligencia Artificial",
    "Engenharia de Software",
    "Analise de Dados",
    "Machine Learning",
  ],
  datasets: [
    {
      label: "Popularity",
      data: [50, 65, 20, 15, 10],
      backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107"],
      borderColor: "#f44336",
      borderWidth: 1,
    },
  ],
};

export const DougChart = () => {
  return (
    <div id="doughnut">
      <Doughnut data={data} />
    </div>
  );
};
