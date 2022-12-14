import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import FadeThx from "./components/Thx";
import Others from "./components/Other";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Products />
      <FadeThx />
      <Others />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
