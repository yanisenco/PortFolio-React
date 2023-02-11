import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/home/home.css';
import slideDown from 'src/assets/images/icons8-scroll-down-96.png'
import Title from 'src/components/atom/title/Title';


const Home = () => {
    return (
        <div className={classNames("h-screen w-screen","gradientBackground")}>
            <Title titre={"Welcome to my Portfolio"}/>
            <p>scroll for visiting my website</p>
            <a href="#navbar" className='flex justify-center'>
                <img src={slideDown} className='float w-16 absolute bottom-10 duration-300 hover:scale-110' alt="" />
            </a>
        </div>
    );
};

export default Home;