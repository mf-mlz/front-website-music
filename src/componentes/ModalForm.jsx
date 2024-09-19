import React from "react";
import { CircleAlert } from "lucide-react";
import { registerDataFetch } from "../services/registerService";
import Swal from "sweetalert2";

const ModalForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sendData = async () => {
    try {
      /* Data */
      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const correo = document.getElementById("correo").value;
      const lugar = document.getElementById("lugar").value;
      const fechahorario = document.getElementById("fechahorario").value;
      const paquete = document.getElementById("paquete").value;

      const fechahorarioArray = fechahorario ? fechahorario.split("T") : "";
      const fecha = fechahorarioArray ? fechahorarioArray[0] : "";
      const horario = fechahorarioArray ? fechahorarioArray[1] : "";

      const formdata = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        lugar: lugar,
        fecha: fecha,
        horario: horario,
        paquete: paquete,
      };

      const response = await registerDataFetch(formdata);
      if (response.type == "success") {
        Swal.fire({
          icon: "success",
          title: "¡Solicitud Enviada!",
          text: response.data,
        }).then((result) => {
          if (result.isConfirmed) {
            onClose();
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un Error al Procesar la Solicitud",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    
    <div className="bg-white p-9 rounded-md w-11/12 md:w-1/2 lg:w-1/2 max-h-[100vh] overflow-y-auto relative">
      
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-800 focus:outline-none text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>
        <div className="text-center">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Solicitar Cotización
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ingresa la información para solicitar una cotización y nos
              pondremos en contacto contigo con gusto.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="nombre"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" />{" "}
                    Nombre
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    autoComplete="given-name"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="telefono"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" />{" "}
                    Teléfono
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    name="telefono"
                    id="telefono"
                    autoComplete="family-name"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="correo"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" />{" "}
                    Correo
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="email"
                    name="correo"
                    id="correo"
                    autoComplete="given-name"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="lugar"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" /> Lugar
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lugar"
                    id="lugar"
                    autoComplete="lugar"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="fechahorario"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" /> Fecha
                    y Hora
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    name="fechahorario"
                    id="fechahorario"
                    autoComplete="given-name"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="paquete"
                    className="flex items-center bg-white text-sm font-medium leading-6 text-gray-900"
                  >
                    <CircleAlert className="w-5 h-5 text-gray-900 mr-2" />{" "}
                    Paquete
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    id="paquete"
                    name="paquete"
                    autoComplete="paquete"
                    className="p-2 block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    <option value="">Selecciona una Opción</option>
                    <option value="Básico">Básico</option>
                    <option value="Plus">Plus</option>
                    <option value="Deluxe">Deluxe</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={sendData}
              className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
