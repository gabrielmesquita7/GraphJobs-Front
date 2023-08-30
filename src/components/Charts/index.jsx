import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./charts.module.css";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function PizzaGraph() {
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
  return (
    <div className={styles.doughnut}>
      <Doughnut data={data} />
    </div>
  );
}

export default PizzaGraph;


