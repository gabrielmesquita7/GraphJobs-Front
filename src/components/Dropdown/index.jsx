import React, { useState } from "react";
import Select from "react-select";
import styles from "./dropdown.module.css";

const areaint = [
  { value: "data-science", label: "Data Science" },
  { value: "dev-ops", label: "DevOps" },
  { value: "operational-research", label: "Pesquisa Operacional" },
  { value: "inteligencia-artificial", label: "Inteligência Artificial" },
];

function Dropdown({ onSelectArea }) {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleAreaChange = (selectedOption) => {
    setSelectedArea(selectedOption);
    onSelectArea(selectedOption); 
  };

  return (
    <section className={styles.filters}>
      <div className={styles.filter}>
        <h1>Área de Interesse:</h1>
        <Select
          options={areaint}
          onChange={handleAreaChange}
          value={selectedArea}
        />
      </div>
    </section>
  );
}

export default Dropdown;
