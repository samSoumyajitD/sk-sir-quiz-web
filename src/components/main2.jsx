import React, { useState } from 'react';
import './main2.css';
import Prize from './prize';
import logo6 from './images/ice-cream.svg';
import logo7 from './images/plant.svg';

const Know = () => {
  const [showPrize, setShowPrize] = useState(false);

  const togglePrize = () => {
    setShowPrize(!showPrize);
  };

  const imageStyle = {
    transform: showPrize ? 'translateY(40%) scale(1.3)' : 'translateY(0) scale(1)',
   
    opacity: showPrize ? '1' : '0',
  };

  return (
    <div className='prize1'>
      <img src={logo6} className="logo6" alt="logo" style={imageStyle} />
    
      <div className='event-button'>
        <button className="Btn" onClick={togglePrize}>
          Prize Pool
        </button>
      </div>
      <img src={logo7} className="logo7" alt="logo" style={imageStyle} />

      <div className={`event-button2 ${showPrize ? 'show' : 'hide'}`}>
        <Prize />
      </div>
    </div>
  );
};

export default Know;
