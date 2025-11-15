import React from "react";
import videoSrc from "../../assets/vid.mp4"

const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay loop muted src={videoSrc}></video>
    </div>
  );
};

export default Video;
