import React from 'react';


const Title = ({titre,id}) => {
    return (
            <h1 className="text-white text-center text-9xl font-bold my-10" id={id}>{titre}</h1>
    );
};

export default Title;