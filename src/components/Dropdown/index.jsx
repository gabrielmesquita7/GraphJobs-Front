import React, { useState } from "react";
import Select from "react-select";
import styles from "./dropdown.module.css";

const areaint = [
  { value: "data-science", label: "Data Science" },
  { value: "opcao2", label: "Desenvolvimento mobile" },
  { value: "opcao3", label: "Inteligencia Artificial" },
  { value: "opcao4", label: "Analise de dados" },
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
