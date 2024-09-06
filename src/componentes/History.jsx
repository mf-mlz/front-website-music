import { Music } from "lucide-react";
import { checklistFestivals } from "../constants";
import codeImg from "../assets/History.jpg";
import React from "react";

const History = () => {
  return (
    <div className="mt-28 mb-28">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Conoce Nuestra
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Trayectoria{" "}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          {checklistFestivals.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-yellow-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <Music />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          <img className="opacity-65 rounded-2xl" src={codeImg}></img>
        </div>
      </div>
    </div>
  );
};

export default History;
