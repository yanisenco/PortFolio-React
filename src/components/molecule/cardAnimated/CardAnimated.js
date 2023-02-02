import React from 'react';

const CardAnimated = ({title, video, anchor}) => {
    return (
        <div className="w-72 h-48 m-10 bg-gray-800 rounded-xl border-4 border-gray-600 ease-in-out duration-300 hover:border-gray-200 hover:scale-105">
            <a href={anchor}>
            <h1 className="absolute mx-auto my-auto font-bold text-slate-50">{title}</h1>
             <video loop autoPlay muted className="relative h-full rounded-xl opacity-0 ease-in-out duration-300 hover:opacity-100">
                <source
                    src={video}
                    type="video/mp4"
                />
            </video> 
            </a>
        </div>
    );
};

export default CardAnimated;
