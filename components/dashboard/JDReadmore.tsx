import React, { useState } from "react";
import styles from "../../styles/JobDescription.module.css";

const JDReadmore = (props: any) => {
  const text = props.aboutCompany;
  const [isReadMore, setIsReadMore] = useState(true);
  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: isReadMore ? text.slice(0, 150) + "..." : text,
        }}
      />
      <p onClick={handleReadMore} className={styles.readmore}>
        {isReadMore ? (
          <>
            View Company <i className="bi bi-arrow-right" />
          </>
        ) : (
          "Show less"
        )}
      </p>
    </>
  );
};

export default JDReadmore;
