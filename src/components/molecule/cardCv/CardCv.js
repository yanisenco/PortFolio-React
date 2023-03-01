import React from 'react';
import style from 'src/components/molecule/cardCv/cardCv.css'
import classNames from 'classnames';

const CardCv = ({id, title, description}) => {
    return (
        <div className="m-10">
            <div className={classNames("card","relative h-96 max-w-sm p-10 ease-in-out duration-700 hover:scale-110")} id={id}>
                <div className={classNames("card-side front", "h-96 border-2 border-gray-600 rounded-xl ease-in-out duration-700 fixed w-10/12 p-4 text-white bg-gray-800 ")}>
                    <div>{title}</div>
                </div>
                <div className={classNames("card-side back", "h-96 border-4 border-gray-200 rounded-xl ease-in-out duration-700 fixed w-10/12 p-4 text-white bg-gray-800 ")}>
                <ul>
                    {description.map((description) => <li className="mb-4 ml-2 list-disc">{description}</li>)}
                </ul>
                </div>
            </div>  
        </div>
    );
};

export default CardCv;
