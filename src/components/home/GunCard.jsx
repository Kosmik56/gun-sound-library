import React, { useRef } from "react";
import { RiVolumeUpFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function GunCard() {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const theme = useSelector((state) => state.theme.isLight);

  //path audio; title; id (link); image

  function playSound() {
    if (!audioRef.current) {
      audioRef.current = new Audio("placeholder.mp3");

      audioRef.current.addEventListener("timeupdate", () => {
        if (audioRef.current) {
          const progressPercentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          progressBarRef.current.style.width = Math.round(progressPercentage) + "%";
        }
      });

      audioRef.current.addEventListener("ended", () => {
        progressBarRef.current.style.width = "0%";
      });
    }

    if (audioRef.current.currentTime > 0) {
      stopSound()
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  function stopSound() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <article className={"mt-10 ml-10 shadow-md rounded-[20px] w-fit overflow-hidden " + (theme ? "bg-gray-100" : "bg-white/60")}>
      <img
        className="w-[280px] aspect-video object-cover object-center"
        src="placeholder.png"
        alt="placeholder"
      />

      <div className="p-2 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold tracking-[1.2px] font-sans leading-tight">HK 416 F</h3>

        <div className="flex py-[7px] gap-[10px] w-full">
          <button onClick={playSound}>
            <RiVolumeUpFill className={"rounded-full h-[30px] w-[30px] p-[6px] w-fit shadow " + (theme ? "bg-button" : "bg-button-dark")} />
          </button>

          <div className={"grow h-[30px] rounded-[12px] flex items-center px-[10px] " + (theme ? "bg-button" : "bg-button-dark")}>
            <div
              ref={progressBarRef}
              className="rounded-[5px] h-[10px] bg-green-300 transition-width ease-linear duration-300"
            ></div>
          </div>
        </div>

        <Link to="/"
          className={"flex items-center justify-center h-[40px] w-full rounded-[12px] text-[20px] tracking-[1px] cursor-pointer shadow " + (theme ? "bg-button" : "bg-button-dark")}
          type="button" value="Voir plus">
          Voir plus
        </Link>
      </div>
    </article>
  );
}
