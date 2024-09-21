import React from "react";
import { about } from "../constants";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="mt-28 mb-28">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Sobre
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Nosotros
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img className="opacity-65 rounded-2xl" src={aboutImg}></img>
        </div>
        <div className="pt-12 w-full lg:w-1/2 flex items-center justify-center">
          {about.map((about, index) => (
            <div key={index} className="w-full max-w-[100%] mx-auto">
              <div className="flex justify-center">
                <div>
                  <p
                    className="text-lg text-center p-2 md:p-1 mb-20 text-neutral-500"
                    dangerouslySetInnerHTML={{ __html: about.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
