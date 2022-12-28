import React from 'react';
import ImageTexte from 'src/components/atom/imageTexte/ImageTexte';



const LinkImage = (link,image,titre) => {
    return (
        <a href={link}>
            <ImageTexte image={image} titre={titre}/>
        </a>
    );
};

export default LinkImage;