import React, { useState } from "react";
import { Link } from "react-scroll";
import Modal from "./Modal";
import ModalForm from "./ModalForm";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  /* Modal */
  const videoUrl = import.meta.env.VITE_API_URL_SOBRE_NOSOTROS;
  
  const [modalInfo, setModalInfo] = useState({ isOpen: false, link: videoUrl });
  const openModal = () => setModalInfo({ isOpen: true, link: videoUrl });
  const closeModal = () => setModalInfo({ isOpen: false, link: "" });

  const [modalInfoForm, setModalInfoForm] = useState({ isOpen: false });
  const openModalForm = () => setModalInfoForm({ isOpen: true });
  const closeModalForm = () => setModalInfoForm({ isOpen: false });

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <Modal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        videoLink={modalInfo.link}
      />
      <ModalForm
        isOpen={modalInfoForm.isOpen}
        onClose={closeModalForm}
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <Link
              to="Hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 text-white text-2xl font-bold"
            >
              Grupo Congnac
            </Link>
          </div>

          {/* Navegation */}
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-6 lg:mb-0">
            <li>
              <a
                onClick={() => openModal()}
                className="cursor-pointer hover:text-yellow-500 transition duration-300"
              >
                Sobre Nosotros
              </a>
            </li>

            <li>
              <Link
                to="Workflow"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-500 transition duration-300"
              >
                Servicios
              </Link>
            </li>
            <li>
              <a
                onClick={() => openModalForm()}
                className="cursor-pointer hover:text-yellow-500 transition duration-300"
              >
                Solicitar Cotización
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/GrupoMusicalCognac"
              className="text-neutral-300 hover:text-yellow-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@grupomusicalcognac"
              className="text-neutral-300 hover:text-yellow-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/grupomusical.cognac/"
              className="text-neutral-300 hover:text-yellow-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Grupo Musical Cognac. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
