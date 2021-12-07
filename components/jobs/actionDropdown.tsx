import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../../styles/JobsApplicants.module.css";

const ActionDropdown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className={styles.dropdownWrapped}>
          <i className="bi bi-three-dots-vertical" />
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownBody}>
          <Dropdown.Item href="#">
            View Applicants <i className="bi bi-people" />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            View Job Post <i className="bi bi-file-earmark-text" />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Edit Job Post <i className="bi bi-pen" />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Hide Job Post <i className="bi bi-eye-slash" />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Save as Template <i className="bi bi-save2" />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Duplicate as New Job Post <i className="bi bi-subtract" />
          </Dropdown.Item>
          <Dropdown.Item href="#" className={styles.boost}>
            BOOST JOB POST <i className="bi bi-lightning" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ActionDropdown;
