import { CheckCircle2, Info } from "lucide-react";
import { pricingOptions } from "../constants";
import React from "react";

const Services = () => {
  return (
    <div className="mt-28">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pb-[3.25rem]">
        Paquetes
      </h2>
      <div className="flex items-center justify-center space-x-2 p-5">
        <Info className="text-yellow-400 mx-2" />
        <p className="bg-gradient-to-r from-yellow-500 to-orange-400 text-transparent bg-clip-text text-xl flex items-center">
          <span>
            La <b>hora adicional</b> para cualquiera de nuestros paquetes es de <b> $5,000.00 </b> /
            Big Band <b> $6,000.00</b> <br></br><b className="text-white text-xxl">(Big Band Disponible Sólo para Paquete Deluxe )</b>
          </span>
        </p>
      </div>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl h-[620px]">
              <p className="text-4xl">
                {option.title}{" "}
                {option.title === "Plus" && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-400 text-transparent bg-clip-text text-sm">
                    (Más Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-3xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Evento</span> 
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-yellow-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-cl hover:bg-yellow-900 border border-yellow-900 rounded-lg transition duration-200">Cotizar</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
