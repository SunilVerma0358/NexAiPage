import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlockChain from "./components/BlockChain";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Powered from "./components/Powered";
import AndMore from "./components/AndMore";
import NextAi from "./components/NextAi";
import TokenE from "./components/TokenE";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [Loader, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3500);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      {" "}
      {Loader ? (
        <>
          {" "}
          <Preloader />{" "}
        </>
      ) : (
        <div className="bg-[#040404]">
          {" "}
          <HeroSection />
          <Powered />
          <Features />
          <BlockChain />
          <AndMore />
          <NextAi />
          <TokenE />
          <Footer />
          <BackToTop />
        </div>
      )}{" "}
    </>
  );
}

export default App;
