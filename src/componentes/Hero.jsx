import React, { useState } from "react";
import ModalForm from "./ModalForm";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import logo from "../assets/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  const [modalInfoForm, setModalInfoForm] = useState({ isOpen: false });
  const openModalForm = () => setModalInfoForm({ isOpen: true });
  const closeModalForm = () => setModalInfoForm({ isOpen: false });

  return (
    <div className="flex flex-col items-center mt-12 mb-28 lg:mt-20">
      <ModalForm isOpen={modalInfoForm.isOpen} onClose={closeModalForm} />
      <img className="h-40 w-40 my-5 animate-pulse" src={logo} alt="Logo" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Grupo Musical <br></br>
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          Cognac
        </span>
      </h1>
      <p className="mt-10 mb-5 text-lg text-center text-neutral-500 max-w-4xl italic">
        Versatilidad y ritmo para tus eventos en <b>Hidalgo</b> y alrededores. <br></br> <b>¡La música perfecta para bodas, fiestas y celebraciones!</b>
      </p>
      <div className="flex justify-center space-x-4 my-5">
        <a
          onClick={() => openModalForm()}
          className="cursor-pointer bg-transparent border border-white py-2 px-3 rounded-md flex items-center space-x-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">Solicitar Cotización</span>
        </a>
        <a
          href="https://wa.me/7711244230?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20los%20paquetes%20musicales%20que%20ofrecen.%20¿Me%20pueden%20enviar%20más%20información%3F"
          className="bg-yellow-400 border border-yellow-400 py-2 px-3 rounded-md flex items-center space-x-2 text-black transition duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-neutral text-xl" />
          <span className="text-neutral">Contactános</span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center my-10">
        <a
          href="https://www.facebook.com/GrupoMusicalCognac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2 w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-colors">
            <FaFacebookF className="text-xl" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/grupomusical.cognac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2 w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-colors">
            <FaInstagram className="text-xl" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/@grupomusicalcognac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mx-2 w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-colors">
            <FaYoutube className="text-xl" />
          </div>
        </a>
      </div>
      {/* Videos */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-yellow-700 shadow-yellow-400 mx-2 my-4 transition duration-2000 ease-in-out bg-black"
        >
          <source src={video1} type="video/mp4" />
          Video no Soportado
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-yellow-700 shadow-yellow-400 mx-2 my-4 transition duration-2000 ease-in-out bg-black"
        >
          <source src={video2} type="video/mp4" />
          Video no Soportado
        </video>
      </div>
    </div>
  );
};

export default Hero;
