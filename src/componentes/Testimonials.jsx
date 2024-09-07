import { UserCircle, Eye } from "lucide-react";
import { FaStar } from 'react-icons/fa';
import Modal from "./Modal";
import React, { useState } from "react";

const Testimonials = ({ surveys }) => {
  /* Modal */
  const [modalInfo, setModalInfo] = useState({ isOpen: false, link: "" });
  const openModal = (link) => setModalInfo({ isOpen: true, link });
  const closeModal = () => setModalInfo({ isOpen: false, link: "" });

  const viewLinkPhoto = (link) => {
    const id = link.split("id=")[1];
    return `https://drive.google.com/thumbnail?id=${id}`;
  };

  const checkCalification = (number) => {
    const califications = [];
    for (let index = 0; index < number; index++) {
      califications.push(<FaStar key={index} />);
    }
  
    return califications;
  };

  return (
    <div className="mt-4 mb-28 tracking-wide">
      {/* <hr className="border-t border-yellow-100 opacity-20" /> */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lb:my-20">
        Comentarios
      </h2>
      <div className="flex flex-wrap justify-center">
        {surveys.map((survey, index) => (
          <div key={index} className="w-full sm:w-full lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col items-center mt-8">
                  <img
                    className="rounded-full h-10 w-10 mb-4 cursor-pointer"
                    src={viewLinkPhoto(survey[6])}
                    alt={survey[1]}
                    onClick={() => openModal(survey[6])}
                  ></img>
                  <span className="flex my-1 space-x-2 text-yellow-400">{checkCalification(survey[7])}</span>
                  <div className="text-center">
                    <h6>{survey[1]}</h6>
                    <span className="text-sm font-normal italic text-neutral-500">
                      Fecha y Lugar del Evento: <br />
                      <b>
                        {survey[2]} <br /> {survey[3]}
                      </b>
                    </span>
                  </div>
                </div>
                <div className="my-5 text-center">
                  <b className="text-yellow-400 italic">"{survey[4]}"</b>
                </div>
                <div className="flex justify-center my-4">
                  {survey[5] && (
                    <button
                      onClick={() => openModal(survey[5])}
                      className="bg-yellow-600 border border-yellow-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-yellow-700 hover:border-yellow-700"
                    >
                      <Eye className="w-5 h-5" /> <span>Ver Video</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalInfo.isOpen}
          onClose={closeModal}
          videoLink={modalInfo.link}
        />
      </div>
    </div>
  );
};

export default Testimonials;
