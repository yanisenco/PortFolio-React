import React, {useState, useEffect, useRef} from 'react';
import style from 'src/components/template/navigationHeader.css';
import { NavLink } from 'react-router-dom';
import Cards from 'src/components/atom/cards/Cards.js';
import Slider from '../organisme/slider/Slider';

const NavigationHeader = () => {
    const isMobile = window.innerWidth <768;
    const [isBurgerMenuOpen, setIsBurgerMenuOpen]=useState(false);

    const [scrollY, setScrollY] = useState(0);
    const [positionY, setPositionY] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarRef = useRef();
    
  
    useEffect(() => {
      const divElement = navBarRef.current;
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        const positionY = rect.top + window.scrollY;
  
        setPositionY(positionY);
      }
    }, [navBarRef.current]);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });  

    const menuParts =[
        {
            title:"first",
            url:"#first"
        },
        {
            title:"second",
            url:"#second"
        },
        {
            title:"third",
            url:"#third"
        },
        {
            title:"fourth",
            url:"#fourth"
        },
        {
            title:"fifth",
            url:"#fifth"
        }]

        const menu = menuParts.map((menuPart, index)=>
        <a 
        href={menuPart.url} 
        key={index}
        >
            {menuPart.title}
        </a>)
    
    return (
    <div style={{position: 'absolute', width: '100%',  height: '100%'}}>

                <div className="navBar" style={{position: scrollY < positionY ?'absolute' : 'fixed'}} ref={navBarRef}>
                    {/* ☰ */}
                        {menu}
                </div>  
    
        <div id="first" className="section">
            first section
            <Cards/>
        </div>
        <div id="second" className="section">
            second section
        </div>
        <div id="third" className="section">
            third section
        </div>
        <div id="fourth" className="section">
            <Slider/>
        </div>
        <div id="fifth" className="section">
            fifth section
        </div>
    </div>
    );
};

export default NavigationHeader;