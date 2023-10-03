import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import styles from "./charts.module.css";
import Chart from 'chart.js/auto';
import { readJSON } from "../../services/read.js";

function Charts({ chartType, selectedArea }) {
  const jsonData = selectedArea ? readJSON(selectedArea.value) : null;

  // Filtrar as competências com valores maiores que 0
  const filteredData = Object.entries(jsonData || {}).filter(([competence, value]) => value > 0);
  const labels = filteredData.map(([competence]) => competence);
  const values = filteredData.map(([_, value]) => value);

  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: "Popularidade",
        data: values,
        backgroundColor: [
          "#f44336",
          "#9c27b0",
          "#03a9f4",
          "#8bc34a",
          "#ffc107",
          // Adicione mais cores aqui, se necessário
        ],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const doughnutChartData = {
    labels: labels,
    datasets: [
      {
        label: "Popularidade",
        data: values,
        backgroundColor: [
          "#f44336",
          "#9c27b0",
          "#03a9f4",
          "#8bc34a",
          "#ffc107",
          // Adicione mais cores aqui, se necessário
        ],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      {chartType === "bar" && (
        <div className={styles.bar}>
          {labels.length > 0 ? (
            <Bar data={barChartData} options={barChartOptions} />
          ) : (
            <p>Nenhum dado disponível para exibição.</p>
          )}
        </div>
      )}

      {chartType === "doughnut" && (
        <div className={styles.doughnut}>
          {labels.length > 0 ? (
            <Doughnut data={doughnutChartData} />
          ) : (
            <p>Nenhum dado disponível para exibição.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Charts;
