import React from 'react';
import { NavLink } from 'react-router-dom';
//import style from '../boutonBackHome/boutonBackHome.module'

const BoutonBackHome = () => {
    return (
        <div className='navigation'>
            <button id="BoutonHome">
                <NavLink to="/" className="TexteBouton">
                    Back to Home page
                </NavLink>
            </button>
        </div>
    );
};

export default BoutonBackHome;