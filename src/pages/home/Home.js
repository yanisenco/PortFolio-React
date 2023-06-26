import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/home/home.css';
import slideDown from 'src/assets/images/icons8-scroll-down-96.png'
import Title from 'src/components/atom/title/Title';


const Home = () => {
    return (
        <div className={classNames("h-screen w-screen","gradientBackground")}>
            <Title titre={"Welcome to my Portfolio"}/>  
                <div className='flex justify-center'>
                    <a href="#navbar" className='w-16 absolute bottom-10'>
                        <p className="text-white w-48">scroll to visit my website</p>
                        <img src={slideDown} className='float duration-300 hover:scale-110' alt="" />
                    </a>
                </div>
        </div>
    );
};

export default Home;