import React from "react";
import styles from "../../styles/Sidebar.module.css";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarMenu}>
        <ul>
          <li>
            <NavLink href="/dashboard" as="/dashboard">
              <i className="bi bi-house"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="/user" as="/user">
              <i className="bi bi-people"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="/jobs" as="/jobs">
              <i className="bi bi-briefcase"></i>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-bag"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-basket"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-circle"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-list-task"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
