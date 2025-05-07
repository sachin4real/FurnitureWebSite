const info = [
  {
    title: "Luxury facilities",
    desc:
      "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    desc:
      "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
  },
  {
    title: "Many Choices",
    desc:
      "We provide many unique workspace choices so that you can choose the workspace to your liking.",
  },
];

const WhyChooseUs = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
      {/* Left Side Heading */}
      <div className="md:col-span-1 text-left mb-10 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-extrabold leading-snug text-black">
          Why <br /> Choosing Us
        </h3>
      </div>

      {/* Right Side Info Cards */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
        {info.map((item, i) => (
          <div key={i} className="text-left px-1">
            <h4 className="text-base font-semibold mb-3 text-black">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
            <a
              href="#"
              className="inline-flex items-center text-orange-500 font-medium text-sm hover:underline"
            >
              More Info
              <span className="ml-1 text-xl">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
