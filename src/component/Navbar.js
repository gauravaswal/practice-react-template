import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Slider from "../component/slider"
import Product from "../pages/products"


function Navbar() {
  return (
    <>
    <Navbar style={{backgroundColor:"#282A35"}}>
      <Container bg="light" className="navbar-header">
          <Navbar.Brand href="#home" style={{color:"white"}}>E-Commerce</Navbar.Brand>
          <input type="text"  placeholder="Search" />
         <div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Contact us</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Sigin in</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Sign up</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Cart</Nav.Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          </div>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar;
