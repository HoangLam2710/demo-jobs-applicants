import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../styles/Dashboard.module.css";
import Data from "../../lib/utils/data";

const Cards = () => {
  return (
    <div className={styles.cards}>
      {Data.cards.map((card, index) => (
        <Card key={index} bg={"light"} text={"dark"}>
          <Card.Body className={styles.cardBody}>
            <div>
              <Card.Title className={styles.cardTitle}>{card.title}</Card.Title>
              <Card.Text className={styles.cardText}>{card.text}</Card.Text>
            </div>
            <div>
              <i className={`bi bi-${card.icon}`} />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
