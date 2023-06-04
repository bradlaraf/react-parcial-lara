import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import Inicio from "./pages/Inicio";
import WhyUs from "./pages/WhyUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/WhyUs" element={<WhyUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Routes>

        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
