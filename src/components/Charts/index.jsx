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
        label: "Requisitos Populares",
        data: values,
        backgroundColor: [
          "#ff5733",
          "#b51e88",
          "#00f4d1",
          "#14b759",
          "#f3d100",
          "#871ec5",
          "#33ff57",
          "#9e6300",
          "#ff1e86",
          "#3357ff",
          "#d100f3",
          "#e60000",
          "#006600",
          "#0000e6",
          "#990099",
          "#e6e600",
          "#ff9900",
          "#009999",
          "#cc0033",
          "#33cc00",
          "#ff3399",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99",
          "#3300cc",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99",
          "#3300cc",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99"
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
          "#ff5733",
          "#b51e88",
          "#00f4d1",
          "#14b759",
          "#f3d100",
          "#871ec5",
          "#33ff57",
          "#9e6300",
          "#ff1e86",
          "#3357ff",
          "#d100f3",
          "#e60000",
          "#006600",
          "#0000e6",
          "#990099",
          "#e6e600",
          "#ff9900",
          "#009999",
          "#cc0033",
          "#33cc00",
          "#ff3399",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99",
          "#3300cc",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99",
          "#3300cc",
          "#99cc00",
          "#003366",
          "#660033",
          "#cc9900",
          "#003300",
          "#ffcc00",
          "#9933cc",
          "#cc0033",
          "#00cc99"
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
