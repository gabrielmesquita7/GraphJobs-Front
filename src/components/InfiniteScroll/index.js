import styles from "./infinitescroll.module.css";
import React, { useEffect, useState } from "react";
import jobsData from "../../db/jobs.json";
import image from "../../assets/images/officeicon.png";

function InfiniteScroll() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMoreJobs = async () => {
      setIsLoading(true);

      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const itemsPerPage = 10;
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      if (startIndex < jobsData.length) {
        const newJobs = jobsData.slice(startIndex, endIndex);
        setJobs((prevJobs) => [...prevJobs, ...newJobs]);
        setPage(page + 1);
      }

      setIsLoading(false);
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isLoading) {
        loadMoreJobs();
      }
    });

    const target = document.querySelector("#loadMoreTrigger");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [isLoading, page]);

  return (
    <div className={styles.container}>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <img src={image} alt="office icon" />
            <div>
              <h3 align="justify">{job.title}</h3>
              <p align="justify">{job.company}</p>
              <p align="justify">{job.location}</p>
            </div>
          </li>
        ))}
      </ul>
      <div id="loadMoreTrigger" style={{ height: "10px" }}></div>
    </div>
  );
}

export default InfiniteScroll;
