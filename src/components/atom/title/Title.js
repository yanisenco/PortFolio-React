import React from 'react';
import classNames from 'classnames';

const Title = ({titre,id,classname}) => {
    return (
            <h1 className={classNames("text-white text-center text-9xl font-bold",classname)} id={id}>{titre}</h1>
    );
};

export default Title;