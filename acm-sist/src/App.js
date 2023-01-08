import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from "react-router-dom";

//Components Imports section
import Navbar from "./Components/Navbar.js";
// import Header from "./Components/Header";

// Importing screens
import Home from "./Screens/Home";
import About from "./Screens/About";
import Blogs from "./Screens/Bolgs";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Blogs" element={<Blogs/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
      {/* <Header /> */}
      {/* <h2>Let's do this...</h2> */}
    </div>
  );
}

export default App;
