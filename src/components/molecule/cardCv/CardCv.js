import React from 'react';

const CardCv = ({id, title, description}) => {
    return (
        <div id={id} className="w-72 h-48 m-10 bg-gray-400 border-4 border-gray-300 ease-in-out duration-300 hover:border-gray-500">
            <h1 className="text-center font-bold text-black underline">{title}</h1>
                <ul>
                    {description.map((description) => <li>{description}</li>)}
                </ul>
        </div>
    );
};

export default CardCv;
