import React from 'react';
import Home from 'src/pages/home/Home';
import CodeConnu from 'src/pages/CodeConnu';
import Cv from 'src/pages/cv/Cv';
import NavBar from 'src/pages/NavBar';
import Contact from 'src/pages/contact/Contact';


const Site = () => {
    return (
        <div>
            <Home />
            <NavBar />
            <CodeConnu />
            <Cv />
            <Contact />
        </div>
    );
};

export default Site;