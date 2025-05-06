import { useState,useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import DarkMode from './components/Darkmode';
import "./index.css"
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';

import Subscribe from './components/Subscribe';
import Testomonials from './components/Testomonials';
import Footer from './components/Footer';







function App() {
  const [orderpopup, setOrderpopup] = useState(false);
  const handleOrderpopup = () =>  {
    setOrderpopup(!orderpopup);
  };

  

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    Aos.refresh
  },[]);

  return (
    <>
      <div className='bg-white dark:bg-gray-900  dark:text-white
       duration-200'>
        <Navbar handleOrderpopup={handleOrderpopup }/>
         <Banner />
         <Hero handleOrderpopup={handleOrderpopup }/>
         <DarkMode />
         <Products />
         <TopProducts handleOrderpopup={handleOrderpopup } />
         <Subscribe />
         <Testomonials />
         <Footer />
      </div>
    </>
  )
}

export default App
