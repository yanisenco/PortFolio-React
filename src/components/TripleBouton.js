import React from 'react';

const TripleBouton = ({ CloseButton, MinimizeButton, ContrastButton }) => {
    return (
        <>
            <button onClick={() => { CloseButton() }} className='bg-red-600 w-10 h-10 m-1 mt-1.5 ml-1.5 rounded-full duration-300 hover:bg-red-900'></button>
            <button onClick={() => { MinimizeButton((prevgrow) => !prevgrow) }} className='bg-orange-600 w-10 h-10 m-1 rounded-full duration-300 hover:bg-orange-900'></button>
            <button onClick={() => { ContrastButton((prevcontrast) => !prevcontrast) }} className='bg-green-500 w-10 h-10 m-1 rounded-full duration-300 hover:bg-green-900'></button>
        </>
    );
};

export default TripleBouton;