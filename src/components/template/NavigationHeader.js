import React from 'react';
import IconCode from 'src/assets/images/dev.svg';
import IconCv from 'src/assets/images/cv.svg';
import IconContact from 'src/assets/images/linkedin.svg';
import ImageTexte from 'src/components/atom/imageTexte/ImageTexte';
import { NavLink } from 'react-router-dom';

const NavigationHeader = () => {
    return (
        <div>
            <div className='sm:grid sm:grid-cols-3 place-items-center h-56 gap-14 mt-10'>
                <NavLink to="/CodeConnu">
                <ImageTexte image={IconCode} titre="Mes compétences" />
                </NavLink>
                <NavLink to="/Cv">
                <ImageTexte image={IconCv} titre="Mon CV" />
                </NavLink>
                <a href="https://www.linkedin.com/in/yanis-encognere-194146222/">
                <ImageTexte image={IconContact} titre="Mon Contact" />
                </a>
            </div>
        </div>
    );
};

export default NavigationHeader;