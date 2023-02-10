import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/home/home.css';
import slideDown from 'src/assets/images/icons8-scroll-down-96.png'


const Home = () => {
    return (
        <div className={classNames("h-screen w-screen flex justify-center","gradientBackground")}>
            <h1>HOME</h1>
            <img src={slideDown} className='float w-16 absolute bottom-10 duration-300 hover:scale-110' alt="" />
        </div>
    );
};

export default Home;