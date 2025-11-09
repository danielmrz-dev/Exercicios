import React from "react";
import videoSrc from "./assets/prettier.mp4";
import { buttonStyle } from "./Video";
import { useLocalStorage } from "./hooks/useLocalStorage";


function Video2() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage('volume', '0');

  React.useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) {
      video.current.volume = Number(volume);      
    }
  }, [volume])

  return (
    <>
      <p>{Number(volume) * 100}</p>
      <div className="flex gap-6">
        <button onClick={() => setVolume('0')} className={buttonStyle}>0</button>
        <button onClick={() => setVolume('0.5')} className={buttonStyle}>50</button>
        <button onClick={() => setVolume('1')} className={buttonStyle}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}/>
    </>
  );
}

export default Video2;
