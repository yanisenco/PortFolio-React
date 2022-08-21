import React from 'react';
import BoutonRond from 'src/components/atom/boutonRond/BoutonRond';

const TripleBouton = ({ CloseButton, MinimizeButton, ContrastButton }) => {
     
    return (
        <>
            <BoutonRond customFunction={CloseButton}/>
            <BoutonRond customFunction={MinimizeButton}/>
            <BoutonRond customFunction={ContrastButton}/>
        </>
    );
};

export default TripleBouton;