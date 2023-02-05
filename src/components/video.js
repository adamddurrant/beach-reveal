import React from "react";
import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import YouTube from "react-youtube";

export default function Video() {
  const { video } = useContext(VideoContext);
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
      loop: 1,
      modestbranding: 1,
    },
  };
  const style = {
    borderRadius: "20px",
  };

  return (
    <>
      {video && (
        <>
          <div className='video-container rounded absolute z-20'>
            <YouTube
              videoId='S-A1upowdJI'
              opts={opts}
              className={"rounded"}
              style={style}
            />
          </div>
        </>
      )}
    </>
  );
}
