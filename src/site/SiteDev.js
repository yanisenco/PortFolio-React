import React from 'react';
import Home from 'src/pages/home/Home';
import CodeConnu from 'src/pages/CodeConnu';
import Cv from 'src/pages/Cv/Cv';
import NavBar from 'src/pages/NavBar';
import Contact from 'src/pages/contact/Contact';
import AboutMe from 'src/pages/aboutMe/AboutMe';
import NavigationHeader from 'src/components/template/NavigationHeader';
import HorizontalCarousel from 'src/pages/horizontalCarousel/HorizontalCarousel';



const SiteDev = () => {
    return (
        <div>
            <Home type={"developer"}/>
            <NavigationHeader/> 
           
            {/* <HorizontalCarousel/>
            <NavBar type={"developer"}/>
             <AboutMe />
            <CodeConnu />
            <Cv /> 
            <Contact />*/}
        </div>
    );
};

export default SiteDev;