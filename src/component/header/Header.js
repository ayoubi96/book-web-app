import  './header.css'
import { useState } from "react";
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navbar from './Navbar'
import Slider from './slider/Slider';
import Footer from './footer/Footer';

const Header=() => {
  const [toggle, setToggle] = useState(false);
    return ( 
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle={toggle}/>
      <HeaderMiddle/>
      <Navbar toggle={toggle} setToggle={setToggle}/>
      <Slider/>
      <Footer/>
   </header>
  
       
    );
}
export default Header;