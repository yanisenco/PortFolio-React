import React from 'react';


const ImageTexte = ({image, titre}) => {
    return (
        <>
            <img src={image} className='w-32 duration-300 hover:scale-110' alt="" />
            <h1 className='text-white text-center text-xl'>{titre}</h1>
        </>
    );
};

export default ImageTexte;