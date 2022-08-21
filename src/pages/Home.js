import Container from 'react-bootstrap/Container';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Slider from "../component/slider"
import Product from "../pages/products"
import Navbaar from "../component/Navbar"

function Home() {
  return (
    <>
     <Navbaar ></Navbaar>
     <Slider></Slider>
     <Product></Product>
    </>
  );
}

export default Home;
