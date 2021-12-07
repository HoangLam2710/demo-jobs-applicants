import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import styles from "../../styles/User.module.css";

const DeleteButton = (props: any) => {
  const [isLoading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    const result = window.confirm("Do you really want to delete it?");

    if (!result) {
      setLoading(false);
      return;
    }

    try {
      await axios({
        url: `${SERVER_BASE_URL}/${props.userId}`,
        method: "DELETE",
        headers: { "app-id": "61948d0ce6d8b3a3164452e0" },
      });
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("User is successfully deleted!!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className={styles.DeleteButton}
        variant="danger"
        onClick={handleDelete}
        disabled={isLoading}
      >
        <i className="bi bi-trash"></i>
      </Button>
    </>
  );
};

export default DeleteButton;
