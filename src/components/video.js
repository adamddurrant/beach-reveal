import React from "react";
import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import ReactPlayer from "react-player/youtube";

export default function Video() {
  const { video } = useContext(VideoContext);

  return (
    <>
      {video && (
        <>
          <div className='video-container rounded absolute z-50 w-[640px] h-[360px]'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=35npVaFGHMY'
              width='100%'
              height='100%'
              controls={false}
              muted={false}
              playing={true}
              light={<img src='images/video-thumb.svg' alt='Thumbnail' />}
            />
          </div>
        </>
      )}
    </>
  );
}
