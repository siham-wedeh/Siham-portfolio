
import './assets/CSS/style.css';
import './assets/CSS/respo.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Banner from './Components/Banner';
import Statistics from './Components/Statistics';
import Qualification from './Components/Qualification';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures animation happens only once
    });
  }, []);
  return (
    <div className="App">
      
          <Header />
            <Banner />
            <Statistics />
            <Qualification />
            <Skills />
            <Projects />
            <Contact />
          <Footer />
      
       
    </div>
  );
}

export default App;


