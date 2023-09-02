import React from "react";
import styles from "./jobresults.module.css";
import jobicon from "../../assets/images/jobicon.png";
import officeicon from "../../assets/images/officeicon.png";
import taskicon from "../../assets/images/taskicon.png";
import { InfiniteScroll } from "../../components";

function JobResults() {
  return (
    <div className={styles.container}>
        <div className={styles.list}>
            <div className={styles.listitem}>
                <header className={styles.header}>
                    <h1>10 Resultados</h1>
                </header>
                <InfiniteScroll />
            </div>
        </div>
        <div className={styles.detailjob}>
            <div className={styles.jobtopcart}>
                <div className={styles.jobtopcartTitle}>
                    <h2>Frontend Developer</h2>
                </div>
                <div className={styles.jobtopcartDesc}>
                <span>Magazine Liliani S/A</span>
                <span className={styles.whitespace}></span>
                · São Paulo, São Paulo, Brasil (Presencial)
                <span className={styles.whitespace}></span>
                <span className={styles.neutraltext}>há 1 mês</span>
                <span className={styles.whitespace}></span>
                <span className={styles.neutraltext}>·</span>
                <span className={styles.whitespace}></span>
                <span className={styles.neutraltext}>583 candidaturas</span>
                </div>
            </div>
            <div className={styles.jobdetail}>
                <ul>
                    <li className={styles.jobtopcartinsigh}>
                        <div className={styles.jobtopcartinsighImage}>
                            <img src={jobicon} alt="jobicon"></img>
                        </div>
                        <span>
                            Tempo Integral
                        </span>
                    </li>
                    <li className={styles.jobtopcartinsigh}>
                        <div className={styles.jobtopcartinsighImage}>
                            <img src={officeicon} alt="officeicon"></img>
                        </div>
                        <span>
                            1.001-5.000 funcionários
                        </span>
                    </li>
                    <li className={styles.jobtopcartinsigh}>
                        <div className={styles.jobtopcartinsighImage}>
                            <img src={taskicon} alt="taskicon"></img>
                        </div>
                        <span>
                            Competências: Otimização para mecanismos de busca (SEO), Comércio eletrônico, e mais 8
                        </span>
                    </li>
                </ul>
            </div>
            <div className={styles.savebutton}>
                <button>Salvar</button>
            </div>
        </div>
    </div>
  );
}

export default JobResults;
