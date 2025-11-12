import React from "react";
// import Input from "./Input";
import videoSrc from "./assets/prettier.mp4";

export const buttonStyle = 'min-w-25 p-2 bg-purple-500 text-black rounded-sm cursor-pointer';

function Video() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  // const [data, setData] = React.useState<Venda[] | null>(null);

  const forward = () => {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  const changePlaybackRate = (speed: number) => {
    if (!video.current) return; 
    video.current.playbackRate = speed;
  }

  const setAudio = () => {
    if (!video.current) return; 
    setIsMuted(() => !isMuted);
  }

  const pictureInPicture = async () => {
    if (!video.current) return; 
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  React.useEffect(() => {
    console.log("teste");
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <p> {playing ? 'Assistindo' : 'Pausado'} </p>
        { playing ? (
          <button className={buttonStyle} onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button className={buttonStyle} onClick={() => video.current?.play()}>Play</button>
        ) }
        <button className={buttonStyle} onClick={forward}>+2s</button>
        <button className={buttonStyle} onClick={() => changePlaybackRate(1)}>1x</button>
        <button className={buttonStyle} onClick={() => changePlaybackRate(2)}>2x</button>
        <button className={buttonStyle} onClick={pictureInPicture}>PiP</button>
        <button className={buttonStyle} onClick={setAudio}> {isMuted ? 'UnMute' : 'Mute'}</button>
      </div>

      <video 
        controls 
        ref={video} 
        src={videoSrc}
        onPlay={() => setPlaying(true)} 
        onPause={() => setPlaying(false)}
        muted={isMuted}
      />
    </>
  );
}

export default Video;
