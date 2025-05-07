const testimonials = [
    {
      name: "Bang Upin",
      title: "Pedagang Asongan",
      review:
        "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      rating: 4,
      avatar: "/avatar-1.jpg",
      background: "/9b2ed3d9b2a3882779d03355c1e1da861bab3d1d.jpg",
    },
    {
      name: "Ibuk Sukijan",
      title: "Ibu Rumah Tangga",
      review:
        "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      rating: 5,
      avatar: "/avatar-2.jpg",
      background: "/86ca2d40e5cc03367af5eb6766025000d1108f3d.jpg",
    },
    {
      name: "Mpok Ina",
      title: "Karyawan Swasta",
      review:
        "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      rating: 5,
      avatar: "/avatar-3.jpg",
      background: "/737656c2eeb8f98032e5e2b9bd9d84137bbf9d6e.jpg",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-24 bg-white text-center">
        <h5 className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
          Testimonials
        </h5>
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900">
          Our Client Reviews
        </h2>
  
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left arrow */}
          <button className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full flex items-center justify-center z-10">
            ←
          </button>
  
          {/* Testimonial cards */}
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg relative overflow-hidden"
            >
              <img
                src={t.background}
                alt="background"
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-[210px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] rounded-full border-4 border-white overflow-hidden z-20">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-16 pb-6 px-6">
                <h4 className="font-bold text-md mb-1">{t.name}</h4>
                <p className="text-xs text-gray-500 mb-3">{t.title}</p>
                <p className="text-sm text-gray-600 mb-3">“{t.review}”</p>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`text-orange-400 text-lg ${
                        n <= t.rating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
  
          {/* Right arrow */}
          <button className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full flex items-center justify-center z-10">
            →
          </button>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  