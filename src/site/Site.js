import React from 'react';
import Home from 'src/pages/home/Home';
import CodeConnu from 'src/pages/CodeConnu';
import Cv from 'src/pages/cv/Cv';
import NavBar from 'src/pages/NavBar';
import Contact from 'src/pages/contact/Contact';
import AboutMe from 'src/pages/aboutMe/AboutMe';


const Site = () => {
    return (
        <div>
            <Home />
            <NavBar />
            <AboutMe />
            <CodeConnu />
            <Cv />
            <Contact />
        </div>
    );
};

export default Site;