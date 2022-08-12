import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCode from '../../assets/images/dev.svg';
import IconCv from '../../assets/images/cv.svg';
import IconContact from '../../assets/images/linkedin.svg';

const NavigationHeader = () => {
    return (
        <div>


            <div className='sm:grid sm:grid-cols-3 place-items-center h-56 gap-14 mt-10'>
                <div>
                    <NavLink to="/CodeConnu">
                        <img src={IconCode} className='w-32 duration-300 hover:scale-110 m-auto' alt="" />
                        <h1 className='text-fuchsia-400 text-center text-xl'>Mes compétences</h1>
                    </NavLink>
                </div>

                <div>
                    <NavLink to="/Cv">
                        <img src={IconCv} className='w-32 duration-300 hover:scale-110 m-auto' alt=""></img>
                        <h1 className='text-fuchsia-400 text-center text-xl'>Mon CV</h1>
                    </NavLink>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/yanis-encognere-194146222/">
                        <img src={IconContact} className='w-32 duration-300 hover:scale-110 m-auto' alt="" />
                        <h1 className='text-fuchsia-400 text-center text-xl'>Mon Contact</h1>
                    </a>
                </div>

            </div>



        </div>
    );
};

export default NavigationHeader;