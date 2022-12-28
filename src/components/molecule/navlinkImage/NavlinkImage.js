import React from 'react';
import ImageTexte from 'src/components/atom/imageTexte/ImageTexte';
//import { NavLink } from 'react-router-dom';


const NavlinkImage = (link,image,titre) => {
    return (
        //<NavLink to={link}>
            <ImageTexte image={image} titre={titre} />
        //</NavLink>
    );
};

export default NavlinkImage;