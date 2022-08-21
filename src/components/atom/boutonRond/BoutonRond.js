import React from 'react';

const BoutonRond = ({customFunction}) => {
    return (
        <>
            <button onClick={() => { customFunction((prevgrow) => !prevgrow) }} className='bg-red-600 w-10 h-10 m-1 mt-1.5 ml-1.5 rounded-full duration-300 hover:bg-red-900'></button>
        </>
    );
};

export default BoutonRond;