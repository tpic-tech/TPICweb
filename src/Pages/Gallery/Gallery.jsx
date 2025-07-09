import React from "react";

const imageFilenames = ["IMG1.jpeg", "IMG2.jpeg", "IMG3.jpeg"];

function Gallery() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center items-center gap-6 mt-10 px-6 mb-20">
      {imageFilenames.map((filename, index) => (
        <img
          key={index}
          src={`/images/events/${filename}`}  // reference from public/
          alt={`Event ${index + 1}`}
          className="w-72 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  );
}

export default Gallery;

