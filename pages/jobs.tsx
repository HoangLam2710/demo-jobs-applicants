import React, { useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import Select, { components } from "react-select";
import DetailJob from "../components/jobs/detailJob";
import JobHeader from "../components/jobs/jobHeader";
import Data from "../lib/utils/dataJob";
import styles from "../styles/JobsApplicants.module.css";

const JobsApplicants = () => {
  const [page, setPage] = useState(1);
  const dataJobs = Data.dataJobs;

  const handleChangePage = (number: number) => {
    setPage(number);
  };

  const totalPage = 2;
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const options = [
    {
      value: "newApplicants",
      label: "New Applicants (Default)",
      icon: "arrow-down-up",
    },
  ];

  const { Option } = components;
  const IconOption = (props: any) => (
    <Option {...props}>
      <i className={`bi bi-${props.data.icon}`} /> {props.data.label}
    </Option>
  );

  return (
    <>
      <JobHeader />

      <Container className={styles.jobBody}>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <div className={styles.colJobPost}>JOB POST</div>
            <div className={styles.colApplicants}>APPLICANTS</div>
            <div className={styles.colAssigned}>
              ASSIGNED TEAM <i className="bi bi-chevron-down" />
            </div>
            <div className={styles.colStatus}>
              STATUS <i className="bi bi-funnel" />
            </div>
            <div className={styles.colFeatures}>
              <Select
                defaultValue={options[0]}
                options={options}
                components={{ Option: IconOption }}
              />
            </div>
          </div>
          <div className={styles.tableBody}>
            {dataJobs[page - 1].jobs.map((job, index) => (
              <DetailJob key={index} job={job} />
            ))}
          </div>
        </div>
      </Container>

      <Container className={styles.tablePagination}>
        <Pagination>{items}</Pagination>
      </Container>
    </>
  );
};

export default JobsApplicants;
