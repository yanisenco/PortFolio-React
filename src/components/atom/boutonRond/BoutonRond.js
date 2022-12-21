import React from 'react';
import classNames from 'classnames';

const BoutonRond = ({customFunction, color}) => {
    return (
        <>
            <button onClick={() => { customFunction((prevgrow) => !prevgrow) }} className={classNames("w-10 h-10 m-1 mt-1.5 ml-1.5 rounded-full duration-300", color)}></button>
        </>
    );
};

export default BoutonRond;