import './App.css';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
          <Route exact index element={<Home />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/services" element={  <Services/>} />
          <Route exact path="/contact" element={ <Contact/> }/>
          <Route exact path="/footer" element={  <Footer/>} />
          <Route exact path="/login" element={  <Login/>} />
          <Route exact path="/register" element={  <Register/>} />
       
      </Routes>
    </BrowserRouter>
    
      

  );
}

export default App;
