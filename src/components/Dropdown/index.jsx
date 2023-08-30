import React from "react";
import Select from "react-select";
import styles from "./dropdown.module.css"

const areaint = [
  { value: "opcao1", label: "Desenvolvimento web" },
  { value: "opcao2", label: "Desenvolvimento mobile" },
  { value: "opcao3", label: "Inteligencia Artificial" },
  { value: "opcao4", label: "Analise de dados" },
];

const Contrato = [
  { value: "opcao1", label: "Estagio" },
  { value: "opcao2", label: "CLT" },
  { value: "opcao3", label: "PJ" },
];

const Estado = [
  { value: "opcao1", label: "Rio de Janeiro" },
  { value: "opcao2", label: "São Paulo" },
  { value: "opcao3", label: "Minas Gerais" },
];

const Cargo = [
  { value: "opcao1", label: "Desenvolvedor" },
  { value: "opcao2", label: "Analista" },
  { value: "opcao3", label: "Gerente" },
];

function Dropdown() {
  return (

    <section className={styles.filters}>
      <div classname="filter">
        <h1>Área de Interesse:</h1>
        <Select options={areaint} />
      </div>
      <div classname="filter">
        <h1>Contrato:</h1>
        <Select options={Contrato} />
      </div>
      <div classname="filter">
        <h1>Estado:</h1>
        <Select options={Estado} />
      </div>
      <div classname="filter">
        <h1>Cargo:</h1>
        <Select options={Cargo} />
      </div>
    </section>
  );
}

export default Dropdown;
