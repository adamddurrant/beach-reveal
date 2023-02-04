import React from "react";
import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";

export default function Video() {
  const { video } = useContext(VideoContext);

  return (
    <>
      {video && (
        <>
          <div>video</div>
          <div>video</div>
        </>
      )}
    </>
  );
}
