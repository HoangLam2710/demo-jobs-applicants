import React from "react";
import styles from "../../styles/JobDescription.module.css";
import Image from "next/dist/client/image";

const JDContentTags = (props: any) => {
  return (
    <div className={styles.blockContent}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.jdRequest}>
        {props.content.data?.map((item: any, index: number) => (
          <span key={index} className={styles.jdTags}>
            {props.content.isImage ? (
              <>
                <Image
                  src={item.icon}
                  alt="skill preferred"
                  width={12}
                  height={12}
                />
                <span className={styles.tagsContentImage}>{item.content}</span>
              </>
            ) : (
              <>
                {item.icon && <i className={`bi bi-${item.icon}`} />}
                {item.content}
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JDContentTags;
