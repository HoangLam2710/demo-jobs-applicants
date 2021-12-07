import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/dist/client/image";
import styles from "../../styles/JobDescription.module.css";

const JDVideo = (props: any) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={styles.videoPlay}>
      {isPlay ? (
        <ReactPlayer
          url={props.videoURL}
          width="100%"
          height="100%"
          playing={isPlay}
          controls={true}
        />
      ) : (
        <div className={styles.thumbnail} onClick={() => setIsPlay(true)}>
          <Image
            src="/bg-building.jpeg"
            alt="video"
            width={330}
            height={150}
            layout="responsive"
          />
          <i className="bi bi-play-fill" />
        </div>
      )}
    </div>
  );
};

export default JDVideo;
