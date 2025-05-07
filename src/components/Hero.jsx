import React from "react";

const Hero = () => {
  return (
    <section id="furniture" 
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('/d2bee09011d0ef5c5aab59b69714774a45812d7d.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for slight dimming */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
          Make Your Interior More <br />
          Minimalistic & Modern
        </h1>
        <p className="text-lg text-gray-200 max-w-md mb-6 drop-shadow-sm">
          Turn your room with Panto into a lot more minimalistic <br />
          and modern with ease and speed.
        </p>

        {/* Search Box */}
        <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search furniture"
            className="flex-grow px-4 py-2 text-black placeholder-gray-500 outline-none"
          />
          <button className="bg-orange-400 p-3 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.707l4 4a1 1 0 001.414-1.414l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* White fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-white z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
