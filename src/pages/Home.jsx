import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import BestSelling from "../components/BestSelling";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Materials from "../components/Materials";
import Testimonials from "../components/Testimonials";

const Home = () => (
  <div className="scroll-smooth">
    <Header />

    <section id="furniture">
      <Hero />
    </section>

    <section id="shop">
      <WhyChooseUs />
      <BestSelling />
    </section>

    <section id="about">
      <Experience />
      <Materials />
      <Testimonials />
    </section>

    <section id="contact">
      <Footer />
    </section>
  </div>
);

export default Home;
