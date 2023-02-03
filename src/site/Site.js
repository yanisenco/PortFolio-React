import React from 'react';
import Home from 'src/pages/Home';
import CodeConnu from 'src/pages/CodeConnu';
import Cv from 'src/pages/Cv/Cv';
import NavBar from 'src/pages/NavBar';
import Contact from 'src/pages/Contact';


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