
import React from "react";

const Videos = ({ videosLink }) => {
  return (
    <div className="mt-28 tracking-wide mb-28">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Conecta con la
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Música
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {videosLink.map((link, index) => (
          <iframe
            key={index}
            className="w-1/2 sm:h-[300px] md:h-[200px] lg:h-[300px]"
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
              link
            )}`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Videos;
