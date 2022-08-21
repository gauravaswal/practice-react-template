import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";

import HomeScreen from "./pages/Home"
import AddToCart from "./pages/AddToCart"
import Login from "../src/pages/auth/login"
function App() {

  return (
    <BrowserRouter >
              <Routes >
            <Route path="/" element={<HomeScreen />} />
            <Route path="/" element={<AddToCart />} />
            <Route path="/login" element={<Login />} />


          </Routes>
    </BrowserRouter>
  );
}

export default App;
