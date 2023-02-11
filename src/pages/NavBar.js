import React from 'react';
import CardAnimated from 'src/components/molecule/cardAnimated/CardAnimated';
import data from 'src/assets/texte/navBar'



const NavBar = () => {

const cards = data.cards.map((card) =>
<CardAnimated title={card.title} video={card.video} anchor={card.anchor}/>
);

    return (

        <div className='w-screen flex flex-row' id="navbar">
            {cards}
        </div >

    );
};

export default NavBar;
