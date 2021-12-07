import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "../../styles/JobsApplicants.module.css";

const JobHeader = () => {
  return (
    <Container className={styles.jobHeader}>
      <div className={styles.headerSearch}>
        <h1>Jobs & Applicants</h1>

        <div className={styles.searchWrapper}>
          <InputGroup>
            <InputGroup.Prepend>
              <i className="bi bi-search" />
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search Job ..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

        <Button>
          <i className="bi bi-plus" /> Create New Job Post
        </Button>
      </div>

      <div className={styles.buttonFeatures}>
        <div className={styles.features}>
          <div>
            <ul>
              <li className={styles.activeFeature}>
                ACTIVE JOBS <span>20</span>
              </li>
              <li>
                DRAFT <span>2</span>
              </li>
              <li>
                ARCHIVED <span>1</span>
              </li>
            </ul>
          </div>
          <div className={styles.pending}>
            <ul>
              <li>
                PENDING APPROVAL <span>3</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.templates}>
          <Button>
            <i className="bi bi-columns-gap" /> TEMPLATES
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default JobHeader;
