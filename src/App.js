import { BackToTopBtn } from "./components";
import { About, CTA, Cars, Footer, Header, Hero, Testimonials, Why } from "./sections";


function App() {
  return (
    <div className="max-w-[1920px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <CTA />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}

export default App;
