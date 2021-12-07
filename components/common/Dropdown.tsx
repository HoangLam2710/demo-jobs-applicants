import React from "react";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { DEFAULT_IMAGE_SOURCE } from "../../lib/utils/constant";
import styles from "../../styles/Navbar.module.css";
import Router from "next/dist/client/router";

const CustomDropdown = () => {
  const hanldeLogout = () => {
    localStorage.removeItem("user");
    Router.push("/");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.userWrapper}>
        <Image src={DEFAULT_IMAGE_SOURCE} height={40} width={40} alt="Avatar" />
        <div>
          <h4>
            Lam Le <i className="bi bi-chevron-down" />
          </h4>
          <h6>Super admin</h6>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.userDropdown}>
        <Dropdown.Item href="#">
          <i className="bi bi-person-fill" /> Profile
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <i className="bi bi-gear" /> Settings
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <i className="bi bi-list-task" /> Activity Log
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={hanldeLogout}>
          <i className="bi bi-arrow-bar-right" /> Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
