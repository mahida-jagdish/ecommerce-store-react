import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Card from './pages/Card';
import CategoryProduct from './pages/CategoryProduct';
import ProtectedRouts from './components/ProtectedRouts';

export default function App() {

  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude, "App.jsx");

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setOpenDropdown(false);
      }catch (error) {
        console.error(error);
      }
   })
  }


// Cart persistence moved to CardContext (localStorage handling centralized)
  return (
    <BrowserRouter>
    <Navbar location={location} getlocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route> 
        <Route path='/products' element={<Products/>}></Route> 
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path='/card' element={<ProtectedRouts>
          <Card location={location} getLocation={getLocation} />
          </ProtectedRouts>}>
        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}