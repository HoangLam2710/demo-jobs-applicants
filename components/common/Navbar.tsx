import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "../../styles/Navbar.module.css";
import CustomDropdown from "./Dropdown";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.sidebarBrand}>
        <h1>
          <i className="bi bi-layers-fill"></i> <span>JobVid</span>
        </h1>
      </div>

      <CustomDropdown />
    </header>
  );
};

export default Navbar;
