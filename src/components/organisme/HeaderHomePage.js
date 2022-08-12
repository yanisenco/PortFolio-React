import React from 'react';
import photocv from '../../assets/images/photocv.jpg';

const HeaderHomePage = () => {
    return (

        <div>

            <h1 className='text-indigo-500/100 text-6xl text-center mt-7 mb-7'> Welcome to my PortFolio</h1>

            <img className='rounded-full w-40 m-auto shadow-lg shadow-indigo-500/100' src={photocv} alt="" />

        </div>

    );
};

export default HeaderHomePage;