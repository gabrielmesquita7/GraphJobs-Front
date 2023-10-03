import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import styles from "./charts.module.css";
import Chart from 'chart.js/auto';

function Graphs({ chartType }) {
  const data1 = {
    labels: [
      "Desenvolvimento Web",
      "Inteligencia Artificial",
      "Engenharia de Software",
      "Analise de Dados",
      "Machine Learning",
    ],
    datasets: [
      {
        label: "Popularidade",
        data: [50, 65, 20, 15, 10],
        backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107"],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: [
      "Estágiario",
      "Junior",
      "Pleno",
      "Senior",
    ],
    datasets: [
      {
        label: "Média Salarial",
        data: [1500, 3000, 6000, 9000],
        backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107"],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      {chartType === "doughnut" && (
        <div className={styles.doughnut}>
          <Doughnut data={data1} />
        </div>
      )}

      {chartType === "bar" && (
        <div className={styles.bar}>
          <Bar data={data2} />
        </div>
      )}
    </div>
  );
}

export default Graphs;


