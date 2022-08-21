import React from 'react';

const BoutonImage = ({openState, imageSource}) => {
    return (
        <>
            <button onClick={() => { openState }} >
                <img src={imageSource} className="duration-300 hover:duration-300 hover:-rotate-12 hover:scale-110" />
            </button>
        </>
    );
};

export default BoutonImage;