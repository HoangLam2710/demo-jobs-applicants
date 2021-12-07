import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "../../styles/JobDescription.module.css";
import JobDescription from "./JobDescription";

const ButtonJobDescription = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>View Job Description</Button>

      <Modal show={show} onHide={handleClose} className={`modalJD `} size="xl">
        <Modal.Body className={styles.modalBody}>
          <JobDescription closePopup={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonJobDescription;
