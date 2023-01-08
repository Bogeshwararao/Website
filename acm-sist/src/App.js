import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Route } from "react-router-dom";

//Components Imports section
import Navbar from "./Components/Navbar.js";
// import Header from "./Components/Header";

// Importing screens
import Home from "./Screens/Home";
import About from "./Screens/About";
import Blogs from "./Screens/Bolgs";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
     <Navigate>
        <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Blogs" component={Blogs} />
        <Route exact path="/Contact" component={Contact} />
        <Navigate to="/" />
      
            </Navigate>
      {/* <Header /> */}
      {/* <h2>Let's do this...</h2> */}
    </div>
  );
}

export default App;
