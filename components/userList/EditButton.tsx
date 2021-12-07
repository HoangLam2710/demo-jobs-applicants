import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import useSWR from "swr";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import styles from "../../styles/User.module.css";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import EditUserForm from "./EditUserForm";

const EditButton = (props: any) => {
  const [show, setShow] = useState(false);

  const { data, error } = useSWR(`${SERVER_BASE_URL}/${props.userId}`, fetcher);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (error) return <ErrorMessage message="Cannot load user..." />;

  return (
    <>
      <Button
        className={styles.EditButton}
        variant="warning"
        onClick={handleShow}
      >
        <i className="bi bi-pencil-square"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.modalHeader}></Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {data ? (
            <EditUserForm closePopup={handleClose} userData={data} />
          ) : (
            <LoadingSpinner />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditButton;
