import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/AboutUs'} element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
