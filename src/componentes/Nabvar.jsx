import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants/index";
import { React, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  /* Menú Responsive Mobile */
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0"> 
            {/* Logo */}
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight hidden md:block">
              Grupo Cognac
            </span>
            {/* Menú */}
            <ul className="hidden lg:flex ml-12 space-x-6"> 
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-xs cursor-pointer hover:text-yellow-600 transform hover:scale-105"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          {/* Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center p-4">
            <a
              href="https://wa.me/7711244230?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20los%20paquetes%20musicales%20que%20ofrecen.%20¿Me%20pueden%20enviar%20más%20información%3F"
              className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-yellow-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white text-xl" />{" "}
              {/* Icono de WhatsApp */}
              <span className="text-white">Contacto</span>
            </a>
          </div>
          {/* Responsive Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    key={index}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-yellow-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://wa.me/7711244230?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20los%20paquetes%20musicales%20que%20ofrecen.%20¿Me%20pueden%20enviar%20más%20información%3F"
                className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-yellow-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white text-xl" />{" "}
                {/* Icono de WhatsApp */}
                <span className="text-white">Contacto</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
