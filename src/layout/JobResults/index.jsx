import React, { useState } from "react";
import styles from "./jobresults.module.css";
import jobicon from "../../assets/images/jobicon.png";
import officeicon from "../../assets/images/officeicon.png";
import taskicon from "../../assets/images/taskicon.png";
import { InfiniteScroll } from "../../components";
import JobsData from "../../db/jobs.json";

function JobResults() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const numberJobs = JobsData.length;

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.listitem}>
          <header className={styles.header}>
            <h1>{numberJobs} Resultados</h1>
          </header>
          <InfiniteScroll onJobSelect={handleJobSelect} />
        </div>
      </div>
      <div className={styles.detailjob}>
        {selectedJob && (
          <div className={styles.jobtopcart}>
            <div className={styles.jobtopcartTitle}>
              <h2>{selectedJob.title}</h2>
            </div>
            <div className={styles.jobtopcartDesc}>
              <span>{selectedJob.company}</span>
              <span className={styles.whitespace}></span>
              · {selectedJob.location}
              <span className={styles.whitespace}></span>
              <span className={styles.neutraltext}>{selectedJob.postedAgo}</span>
              <span className={styles.whitespace}></span>
              <span className={styles.neutraltext}>·</span>
              <span className={styles.whitespace}></span>
              <span className={styles.neutraltext}>{selectedJob.numApplications} candidaturas</span>
            </div>
          </div>
        )}
        {selectedJob && (
          <div className={styles.jobdetail}>
            <ul>
              <li className={styles.jobtopcartinsigh}>
                <div className={styles.jobtopcartinsighImage}>
                  <img src={jobicon} alt="jobicon"></img>
                </div>
                <span>{selectedJob.workSchedule}</span>
              </li>
              <li className={styles.jobtopcartinsigh}>
                <div className={styles.jobtopcartinsighImage}>
                  <img src={officeicon} alt="officeicon"></img>
                </div>
                <span>{selectedJob.numEmployees}</span>
              </li>
              <li className={styles.jobtopcartinsigh}>
                <div className={styles.jobtopcartinsighImage}>
                  <img src={taskicon} alt="taskicon"></img>
                </div>
                <span>
                  Competências: {selectedJob.competencies.join(", ")}
                </span>
              </li>
            </ul>
          </div>
        )}
        {selectedJob && (
          <div className={styles.savebutton}>
            <button>Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobResults;
