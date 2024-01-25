// MenuButton.js
import React from 'react';
import './main.css'; // Import your CSS file

import Slider from './slider';
import Typewriter from 'typewriter-effect';
import Know from './main2';
import Footer from './footer';
import Login from './login'
import Rule from './rules'
import Register from './registration'

const MenuButton = () => {
 

  return (
    <div>
    <Login/>
    
    <section className='welcome_text'>   
    <Typewriter
  options={{
    strings: ['WELCOME TO THE “Bio-Chase 1.0”','DIVE INTO THE REALM OF CURIOSITY' ],
    autoStart: true,
    loop: true,
    pauseFor:4000,
    delay:150,
    deleteSpeed	:50,
  }}
/>
</section>
<Slider/>
<Know/>


<Rule/>
<Register/>
<Footer/>
    </div>
  );
};

export default MenuButton;
