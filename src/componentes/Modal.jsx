import React from "react";

const Modal = ({ isOpen, onClose, videoLink }) => {
  if (!isOpen) return null;
  
  const fileId = videoLink.split("id=")[1];
  const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-9 rounded-md w-11/12 md:w-1/2 lg:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-800 focus:outline-none text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="text-center">
          <iframe
            src={previewLink}
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            title="Video"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
