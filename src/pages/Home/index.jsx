import React, { useState } from 'react';
import styles from './home.module.css'
import { Dropdown, Graphs } from "../../components";
import { Header} from "../../layout";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState(null); 

  const handleAreaSelect = (selectedOption) => {
    setSelectedArea(selectedOption);
  };

  return (
    <div className={styles.root}>
      <Header />
      <Dropdown onSelectArea={handleAreaSelect} />
      <Graphs chartType={"bar"} selectedArea={selectedArea}/>
      <Graphs chartType={"doughnut"} selectedArea={selectedArea}/>
    </div>
  );
}

export default Index