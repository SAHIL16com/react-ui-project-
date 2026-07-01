import React, { useState } from 'react'
import Navbar from './componants/Navbar.jsx'
import Hero from './componants/Hero.jsx';
import TrustedBy from './componants/TrustedBy.jsx';
import Services from './componants/Services.jsx';
import ServiceCard from './componants/ServiceCard.jsx';
import Ourwork from './componants/Ourwork.jsx';
import Teams from './componants/Teams.jsx';
import ContactUs from './componants/ContactUs.jsx';
import {Toaster} from 'react-hot-toast'
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


  return (
    <div>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Ourwork />
      <Teams />
      <ContactUs />
       
    </div>
  )
}

export default App
