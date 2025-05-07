const Materials = () => {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Left Text */}
          <div className="max-w-lg">
            <h5 className="text-sm text-orange-500 font-semibold tracking-[0.2em] uppercase mb-4">
              Materials
            </h5>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6">
              Very Serious <br />
              Materials For Making <br />
              Furniture
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <a
              href="#"
              className="text-orange-500 text-sm font-semibold inline-flex items-center gap-2"
            >
              More Info
              <span className="text-[16px] font-light">→</span>
            </a>
          </div>
  
          {/* Right image collage */}
          <div className="relative flex gap-6 items-start justify-center">
            {/* Left column images */}
            <div className="flex flex-col gap-6">
              <img
                src="/443cef5f2c32d6f28e6923d590e9c7a89b1297f7.jpg"
                alt="Top chair"
                className="w-48 h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/3c8ea705dfc44b8035ebd10cd5adaafc9278179e.jpg"
                alt="Bottom couch"
                className="w-48 h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
  
            {/* Right big image with blur behind */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-60 h-64 bg-[#f7f7f7] rounded-xl z-0"></div>
              <img
                src="/61554c82d6a52e0a511f5d3e3a3ff6bbfcfafb76.jpg"
                alt="Dining room"
                className="relative z-10 w-60 h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Materials;
  