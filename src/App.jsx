import { use } from 'react'
import './App.css'
import {Load} from './components/load.jsx'
import './index.css'
import { useState } from "react";
import { Navbar} from './components/navbar.jsx'
import { MobileMenu } from './components/mobilemenu.jsx';
import { Home } from './components/sections/Home.jsx';
import { About } from './components/sections/About.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Contact } from './components/sections/Contact.jsx';
// import {RevealOnScroll} from './components/RevealOnScroll.jsx'

function App() {

  const [isloading, setIsloading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isloading && <Load onComplete={() => setIsloading(true)} />} {" "}

        {/* Here goes the main website */}
        <div className={`min-h-screen transition-opacity duration-700  ${isloading ? "opacity-100" : "opacity-0"}
         bg-black text-gray-100`}>

          <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />

          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
    </>
  )
}

export default App;
