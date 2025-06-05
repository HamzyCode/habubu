import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection";
import HowToBuyHububa from "./components/HowToBuyHububa/HowToBuyHububa";
import ListedOn from "./components/ListedOn/ListedOn";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Hr from "./components/Hr/Hr";

function App() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <HeroSection />
        <Hr />
        <ListedOn />
        <Hr />
        <Description />
        <Hr />
        <HowToBuyHububa />
        <Hr />
        <Tokenomics />
        <Hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
