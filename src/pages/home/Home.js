import React from 'react';
import { ReactSVG } from 'react-svg';

import style from 'src/pages/home/home.css';
import slideDown from 'src/assets/images/icons8-scroll-down-96.png'
import Title from 'src/components/atom/title/Title';
import svg from 'src/assets/texte/welcome.svg';


const Home = ({type}) => {
    
    return (
        <div className={`h-screen w-screen ${type === 'photographer' ? "bgPicImage" : "bgDevImage"}`}>
            <a href={type === 'photographer' ? "/" : "/photographer"} className='bg-white'>soon</a>
            <Title titre={ type === 'photographer' ? "Coming soon":"Welcome to my development Portfolio"}/>  
             {/* <ReactSVG src={svg} className="svg" /> */}
            { type === 'developer' ? 
                <div className='flex justify-center'>
                    <a href="#navbar" className='w-16 absolute bottom-10'>
                        <p className="text-white w-48">scroll to visit my work</p>
                        <img src={slideDown} className='float duration-300 hover:scale-110' alt="" />
                    </a>
                </div> 
                : null}
        </div>
    );
};

export default Home;