import React from "react";
import video1 from "../assets/video1.mp4";

const Videos = () => {
  const videoUrl = import.meta.env.VITE_API_URL_VIDEO;
  return (
    <div className="mt-28 tracking-wide mb-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Conecta con la
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Música
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <video
          className="w-1/2 sm:h-[300px] md:h-[200px] lg:h-[300px]"
          controls
        >
          <source src={video1} type="video/mp4" />
          Video no Soportado
        </video>
      </div>
    </div>
  );
};

export default Videos;
