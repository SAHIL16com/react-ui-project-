import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import Navbar from './componants/Navbar.jsx'
import Hero from './componants/Hero.jsx';
import TrustedBy from './componants/TrustedBy.jsx';
import Services from './componants/Services.jsx';
import ServiceCard from './componants/ServiceCard.jsx';
import Ourwork from './componants/Ourwork.jsx';
import Teams from './componants/Teams.jsx';
import ContactUs from './componants/ContactUs.jsx';
import { Toaster } from 'react-hot-toast'
import Footer from './componants/Footer.jsx';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', mouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${position.current.x - 6}px, ${position.current.y - 6}px, 0)`;

        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    }


  }, []);

  return (
    <div>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Ourwork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-9999'
        style={{ transition: 'transform 0.1s ease-out' }}
      >
      </div>

      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 bg-primary rounded-full pointer-events-none z-9999'>
      </div>


    </div>
  )
}

export default App
