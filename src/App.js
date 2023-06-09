import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero'
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Select from "./components/selects/Select";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Footer from "./components/footer/Footer";


function App() {
  return (
   <>
    <Navbar/>
    <Hero />
    <Destinations/>
    <Search/>
    <Select/>
    <ImgCarousel/>
    <Footer/>
   </>
  );
}

export default App;
