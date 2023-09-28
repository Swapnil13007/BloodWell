import Header from "./components/Header/Header";
import Main from "./components/MainContainer/Main";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import HeroSectionSecondary from "./components/HeroSectionSecondary/HeroSectionSecondary";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <HeroSectionSecondary />
      </Main>
      <Footer />
    </>
  );
}

export default App;
