import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "../../styles/User.module.css";
import AddUserForm from "./AddUserForm";

const AddButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles.addButton} onClick={handleShow}>
        Add User <i className="bi bi-plus"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.modalHeader}></Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <AddUserForm closePopup={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddButton;
