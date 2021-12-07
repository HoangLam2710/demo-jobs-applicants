import React from "react";
import { Card, Button, Table } from "react-bootstrap";
import styles from "../../styles/Dashboard.module.css";
import Data from "../../lib/utils/data";

const RecentProjects = () => {
  return (
    <div className={styles.projects}>
      <Card>
        <Card.Header className={styles.projectHeader}>
          <h3>Recent Projects</h3>
          <Button>
            See all <i className="bi bi-arrow-right"></i>
          </Button>
        </Card.Header>
        <Card.Body className={styles.projectBody}>
          <Table className={styles.projectTable}>
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Data.projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.title}</td>
                  <td>{project.department}</td>
                  <td>
                    <span
                      className={`${styles.projectStatus} ${
                        project.status === "review"
                          ? styles.statusReview
                          : project.status === "pending"
                          ? styles.statusPending
                          : styles.statusProgress
                      }`}
                    ></span>
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecentProjects;
