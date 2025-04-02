import style from "./index.module.scss";

interface ProjectVideoProps {
  videoSrc: string;
}

const ProjectVideo = ({ videoSrc }: ProjectVideoProps) => {
  return (
    <>
      <div className={style.projectVideo}>
        <div className={style.projectVideo__video}>
          <video 
            src={videoSrc} 
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
