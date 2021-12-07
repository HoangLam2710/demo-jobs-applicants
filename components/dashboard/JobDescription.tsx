import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/JobDescription.module.css";
import JDContent from "./JDContent";
import Data from "../../lib/utils/dataJD";

const JobDescription = (props: any) => {
  const handleClosePopup = () => {
    props.closePopup();
  };

  return (
    <>
      <div className={styles.jdHeader}>
        <div className={styles.jdHeaderStatus}>
          <Button onClick={handleClosePopup}>
            <i className="bi bi-chevron-left" /> Back to Jobs & Applicants
          </Button>
          <div className={styles.statusWrapped}>
            <div>
              Status: <span className={styles.status}>Active</span>
            </div>
            <div>
              <span className={styles.team}></span> Team Marketing
            </div>
          </div>
          <Button>
            Boost Job Post <i className="bi bi-arrow-up-right" />
          </Button>
        </div>
      </div>
      <JDContent data={Data} />
    </>
  );
};

export default JobDescription;
