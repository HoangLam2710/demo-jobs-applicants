import React from "react";
import styles from "../../styles/JobsApplicants.module.css";
import ActionDropdown from "./actionDropdown";

const DetailJob = (props: any) => {
  const {
    jobName,
    isBoost,
    team,
    status,
    timeExpires,
    numberApplicants,
    arrayApplicants,
  } = props.job;

  const countNew = (array: any) => {
    let count = 0;
    array.forEach((e: any) => {
      if (e.isNew) count++;
    });
    return count;
  };

  const showApplicants = () => {
    return arrayApplicants
      .filter((applicant: any, index: number) => index < 13)
      .map((applicant: any, index: number) =>
        applicant.isNew ? (
          <div className={styles.imgWrapped} key={index}>
            <img src={applicant.img} alt="img" />
          </div>
        ) : index !== 12 ? (
          <div className={styles.imgWrapped} key={index}>
            <div className={styles.layer}></div>
            <img src={applicant.img} alt="img" />
          </div>
        ) : (
          <div className={styles.imgWrapped} key={index}>
            <div className={styles.lastLayer}>
              <p className={styles.leftApplicants}>
                +{arrayApplicants.length - 12}
              </p>
            </div>
            <img src={applicant.img} alt="img" />
          </div>
        )
      );
  };

  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <div className={styles.colJobPost}>
          {isBoost ? (
            <span className={styles.isBoost}>
              {jobName} <i className="bi bi-lightning" />
            </span>
          ) : (
            jobName
          )}
        </div>
        <div className={styles.colApplicants}>
          {arrayApplicants.length !== 0 ? (
            <>
              <p className={styles.applicantsNew}>
                <i className="bi bi-people" />
                <b>{countNew(arrayApplicants)} New</b>
              </p>
              <p>{arrayApplicants.length} Applicants</p>
            </>
          ) : (
            <>
              {status === "Active" ? (
                <>
                  <p>
                    <i className="bi bi-eye" /> <b>Still looking!</b>
                  </p>
                  <p>{numberApplicants} Applicants</p>
                </>
              ) : (
                <>
                  <p></p>
                  <p>{numberApplicants} Applicants</p>
                </>
              )}
            </>
          )}
        </div>
        <div className={styles.colAssigned}>
          <span className={`${styles.circle} team${team}`}></span>
          {team}
        </div>
        <div className={styles.colStatus}>
          <p className={`${styles.status} status${status}`}>{status}</p>
          <p className={styles.timeExpires}>
            {status === "Hidden"
              ? `Paused on ${timeExpires}`
              : `Expires on ${timeExpires}`}
          </p>
        </div>
        <div className={styles.colFeatures}>
          <ActionDropdown />
        </div>
      </div>

      {arrayApplicants.length !== 0 && (
        <div className={styles.avatar}>{showApplicants()}</div>
      )}
    </div>
  );
};

export default DetailJob;
