const Experience = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image with shadow layers */}
        <div className="relative">
          <div className="absolute top-5 left-5 w-full h-full bg-gray-100 rounded-xl z-0"></div>
          <img
            src="/4a4b57d91dde88ae6788c27acd5fc55158eb2f11 (1).jpg"
            alt="Room Experience"
            className="relative rounded-xl shadow-lg z-10 w-[500px]"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg">
          <h5 className="text-orange-500 font-semibold tracking-wide mb-2 uppercase">
            Experiences
          </h5>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            We Provide You The Best Experience
          </h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and luxurious style and with premium quality materials.
          </p>
          <a
            href="#"
            className="text-orange-500 text-sm font-medium inline-flex items-center"
          >
            More Info
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
