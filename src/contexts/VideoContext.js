import { useState, createContext } from "react";

export const VideoContext = createContext();

function VideoContextProvider(props) {
  const [video, setVideo] = useState(false);

  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {props.children}
    </VideoContext.Provider>
  );
}
export default VideoContextProvider;
