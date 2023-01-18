import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter ,
Routes,
Route,
Link } from "react-router-dom";
import ACMlogo from "../Assets/acmnav.png";
import  Home from "../Screens/Home";
import About from "../Screens/About";
import Team from "../Screens/Team";
import Event from "../Screens/Event";
import Contact from "../Screens/Contact";



function CollapsibleExample() {
  return (
    <BrowserRouter>
    < div >
    <Navbar collapseOnSelect expand="sm">
      <Container id="Nav-midlle">
        <Navbar.Brand href="#home"><img src={ACMlogo} alt="" className="acmnavlogo" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="hidden-navbar">
        
        </Navbar.Collapse>
        <Navbar.Collapse >
        <Nav  id="Nav-midlle-items" >
           
           <Nav.Link id="homelink" as={Link} to="/" >Home</Nav.Link>
           <Nav.Link as={Link} to="/About" >About</Nav.Link>
           <Nav.Link as={Link} to="/Team">Team</Nav.Link>
           <Nav.Link as={Link} to="/Event" > Event</Nav.Link>
           <Nav.Link as={Link} to="/Contact" > Contact us</Nav.Link>

        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Team' element={<Team />}/>
        <Route path='/Event' element={<Event />}/>
        <Route path='/Contact' element={<Contact />}/>
        </Routes>
    
   </div>
    </div>
    </BrowserRouter>
  );
}

export default CollapsibleExample;