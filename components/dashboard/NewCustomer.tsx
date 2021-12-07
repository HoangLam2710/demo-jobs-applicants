import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Dashboard.module.css";
import { DEFAULT_IMAGE_SOURCE } from "../../lib/utils/constant";
import Data from "../../lib/utils/data";

const NewCustomer = () => {
  return (
    <div className={styles.customer}>
      <Card>
        <Card.Header className={styles.customerHeader}>
          <h3>New Customer</h3>
          <Button>
            See all <i className="bi bi-arrow-right"></i>
          </Button>
        </Card.Header>
        <Card.Body className={styles.customerBody}>
          {Data.customers.map((customer, index) => (
            <div key={index} className={styles.customerInfo}>
              <div className={styles.customerContent}>
                <Image
                  src={DEFAULT_IMAGE_SOURCE}
                  height={40}
                  width={40}
                  alt="Avatar"
                />
                <div className={styles.customerName}>
                  <h4>{customer.name}</h4>
                  <h6>{customer.position}</h6>
                </div>
              </div>
              <div className={styles.customerSocial}>
                <i className="bi bi-person-circle"></i>
                <i className="bi bi-chat-left-text-fill"></i>
                <i className="bi bi-telephone"></i>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewCustomer;
