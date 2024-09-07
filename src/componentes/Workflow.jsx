import { Disc3, Eye } from "lucide-react";
import { checklistItems } from "../constants";
import codeImg from "../assets/WorkFlow.jpg";
import React, { useState } from "react";
import Modal from "./Modal";

const Workflow = () => {
  /* Modal */
  const [modalInfo, setModalInfo] = useState({ isOpen: false, link: "" });
  const openModal = (link) => setModalInfo({ isOpen: true, link });
  const closeModal = () => setModalInfo({ isOpen: false, link: "" });
  const pdfUrl = import.meta.env.VITE_API_URL_REPERTORIO;

  return (
    <div className="mt-28 mb-28">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Servicios
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Musicales{" "}
        </span>
        Únicos
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img className="opacity-65 rounded-2xl" src={codeImg}></img>
          <div className="flex justify-center space-x-4 my-8">
            <a
              onClick={() => openModal(pdfUrl)}
              className="cursor-pointer bg-yellow-400 border border-yellow-400 py-2 px-3 rounded-md flex items-center space-x-2 text-black transition duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="text-neutral text-xl" />
              <span className="text-neutral">Ver Repertorio</span>
            </a>
          </div>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-yellow-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <Disc3 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalInfo.isOpen}
          onClose={closeModal}
          videoLink={modalInfo.link}
        />
      </div>
    </div>
  );
};

export default Workflow;
