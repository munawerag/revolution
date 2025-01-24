import React from "react";
import style from "./index.module.scss";

const ProjectVideo = () => {
  return (
    <>
      <div className={style.projectVideo}>
        <div className={style.projectVideo__video}>
          <video
            src="/assets/videos/banner.mp4"
            autoPlay
            muted
            loop={true}
          ></video>
        </div>
      </div>
    </>
  );
};

export default ProjectVideo;
