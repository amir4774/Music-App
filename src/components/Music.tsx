"use client";
import { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaPause, FaPlay } from "react-icons/fa";

const Music = ({ src }: { src: string }) => {
  const songRef = useRef<any>(null);
  const progressRef = useRef<any>(null);
  const progressBarRef = useRef<any>(null);
  const [currentTime, setCurrentTime] = useState(
    songRef.current ? songRef.current.audioEl.current.currentTime : 0
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const duration = songRef.current
    ? songRef.current.audioEl.current.duration
    : null;

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressRef.current) {
        progressRef.current.style.width = `${
          (songRef.current.audioEl.current.currentTime /
            songRef.current.audioEl.current.duration) *
          100
        }%`;
        setCurrentTime(songRef.current.audioEl.current.currentTime);
      }
    });

    if (
      songRef.current.audioEl.current.currentTime >=
      songRef.current.audioEl.current.duration
    ) {
      setIsPlaying(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  const playSong = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      songRef.current.audioEl.current.pause();
    } else {
      songRef.current.audioEl.current.play();
    }
  };

  const moveSong = (e: React.MouseEvent<HTMLDivElement>) => {
    if (songRef.current.audioEl.current.currentTime) {
      const wholeWidth = progressBarRef.current.offsetWidth;
      const musicWidth = e.nativeEvent.offsetX;
      songRef.current.audioEl.current.currentTime =
        songRef.current.audioEl.current.duration * (musicWidth / wholeWidth);
      setCurrentTime(songRef.current.audioEl.current.currentTime);
    }
  };

  return (
    <>
      <div
        className="h-2 w-3/4 mx-auto mt-6 mb-2 rounded bg-white hover:cursor-pointer sm:w-1/2"
        ref={progressBarRef}
        onClick={(e) => moveSong(e)}
      >
        <div
          className="w-0 h-full bg-cardBackgroundSecond rounded relative"
          ref={progressRef}
        ></div>
      </div>

      <div className="flex justify-between mx-auto w-3/4 sm:w-1/2">
        <p className="text-cardBackgroundSecond">
          00:
          {currentTime > 10
            ? Math.floor(currentTime)
            : `0${Math.floor(currentTime)}`}
        </p>
        <p className="text-white">
          {duration ? `00:${Math.floor(duration)}` : "loading..."}
        </p>
      </div>

      <div className="text-center">
        <ReactAudioPlayer src={src} ref={songRef} />
        <button
          className="btn btn-lg p-5 text-xl rounded-full bg-gradient-to-tr from-playBackgroundFirst to-playBackgroundSecond text-white"
          onClick={() => playSong()}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
};

export default Music;
