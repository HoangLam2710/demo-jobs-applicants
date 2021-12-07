import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/dist/client/image";
import styles from "../../styles/JobDescription.module.css";
import JDContentChild from "./JDContentChild";
import JDContentTags from "./JDContentTags";
import JDVideo from "./JDVideo";
import JDReadmore from "./JDReadmore";

const JDContent = (props: any) => {
  const {
    companyName,
    logo,
    position,
    address,
    salary,
    requests,
    expires,
    jobDescription,
    skillPreferred,
    jobScope,
    jobRequirements,
    preferredPersonality,
    companyPerks,
    videoURL,
    aboutCompany,
  } = props.data || {};

  return (
    <div className={styles.jdContainer}>
      {props.data && (
        <div className={styles.jdContentWrapped}>
          <div className={styles.wrapped}>
            <Image src={logo} alt="logo" width={100} height={100} />
            <div className={styles.jdContent}>
              <div className={styles.jdContentTop}>
                <Row>
                  <Col sm={8} className={styles.jdContentLeft}>
                    <h6>{companyName}</h6>
                    <h1>{position}</h1>
                    <p>{address}</p>
                    <p>
                      <b>{salary}</b>
                    </p>
                    <div className={styles.jdRequest}>
                      {requests.map((request: any, index: number) => (
                        <span key={index} className={styles.jdTags}>
                          <i className={`bi bi-${request.icon}`} />
                          {request.content}
                        </span>
                      ))}
                    </div>
                  </Col>
                  <Col sm={4} className={styles.jdContentRight}>
                    <p className={styles.badge}>
                      <span>JUST POSTED</span> Expires on {expires}
                    </p>
                    <p className={styles.hot}>
                      <span>HOT!</span> 50 applicants are more!
                    </p>
                    <p className={styles.contentVideo}>
                      Includes Video Q&A <i className="bi bi-camera-video" />
                    </p>
                    <div className={styles.buttonFeature}>
                      <Button>
                        <i className="bi bi-cloud-download" /> Save Job
                      </Button>
                      <Button>
                        <i className="bi bi-circle" /> Apply Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.jdContentBottom}>
                <Row>
                  <Col sm={8} className={styles.jdContentLeft}>
                    <JDContentChild
                      title={"Job Description"}
                      content={jobDescription}
                    />

                    <JDContentTags
                      title={"Skills Preferred"}
                      content={skillPreferred}
                    />

                    <JDContentChild title={"Job Scope"} content={jobScope} />

                    <JDContentChild
                      title={"Job Requirements"}
                      content={jobRequirements}
                    />

                    <JDContentTags
                      title={"Preferred Personality Traits for this Job"}
                      content={preferredPersonality}
                    />

                    <JDContentTags
                      title={"Company Perks"}
                      content={companyPerks}
                    />
                  </Col>
                  <Col sm={4} className={styles.jdContentRight}>
                    <div className={styles.blockContent}>
                      <p className={styles.title}>About Walter Holdings</p>
                      <JDReadmore aboutCompany={aboutCompany} />
                    </div>

                    <div className={styles.blockContent}>
                      <p className={styles.title}>Company Video</p>
                      <JDVideo videoURL={videoURL} />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JDContent;
