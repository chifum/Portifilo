import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import "./App.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portifilo from './components/Portifilo';
import Contact from './components/Contact';
import Education from './components/Education';
import MainFooter from './components/MainFooter';


const App = () => {
  return (
    <>
      <Particles
        className="particles-canvas"
            params={{
              "particles": {
                  "number": {
                      "value": 160,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                          "speed": 4,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 4
                      }
                  }
              }
	    }} />
      <Navbar/>
      <Header />
      <About />
      <Services />
      <Experience />
      <Education />
      <Portifilo />
      <Contact />
      <MainFooter />
    </>
  );
}

export default App;
