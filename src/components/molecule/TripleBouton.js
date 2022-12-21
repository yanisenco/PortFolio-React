import React from 'react';
import BoutonRond from 'src/components/atom/boutonRond/BoutonRond';

const TripleBouton = ({ CloseButton, MinimizeButton, ContrastButton, CloseButtonColor, MinimizeButtonColor, ContrastButtonColor }) => {
     
    return (
        <>
            <BoutonRond customFunction={CloseButton} color={CloseButtonColor}/>
            <BoutonRond customFunction={MinimizeButton} color={MinimizeButtonColor}/>
            <BoutonRond customFunction={ContrastButton} color={ContrastButtonColor}/>
        </>
    );
};

export default TripleBouton;