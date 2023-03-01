import React from 'react';


const ImageTexte = ({image, titre}) => {
    return (
        <div className="flex items-baseline justify-start">
            <h1 className='text-white text-center text-xl text-center'>{titre}</h1>
            <img src={image} className="scale-x-[-1]" alt="" />
        </div>
    );
};

export default ImageTexte;