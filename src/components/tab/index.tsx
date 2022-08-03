import React, { useState } from 'react';
import { Carousel } from '../Carousel';
import { Hero } from '../hero';
import { Navbar } from '../navbar';


export const Tab: React.FC = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (  
    <>
    <Navbar btnTab1={toggleState === 1} 
            btnTab2={toggleState === 2}
            tab1={() => toggleTab(1)} 
            tab2={() => toggleTab(2)} />
        <Hero active={toggleState === 1}  />
        <Carousel active={toggleState === 2} />
    </>
  );
}