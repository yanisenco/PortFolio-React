import React from 'react';

import IconHTML from 'src/assets/images/icons8-html-5.svg';
import IconCSS from 'src/assets/images/icons8-css3.svg';
import IconPYTHON from 'src/assets/images/icons8-python.svg';
import HeaderCodeConnu from 'src/components/organisme/HeaderCodeConnu';
import BoutonCodeConnu from 'src/components/organisme/BoutonCodeConnu';
import JsonData from 'src/assets/texte/données';
import CardAnimated from 'src/components/molecule/cardAnimated/CardAnimated'


const CodeConnu = () => {

    return (

        <div className='h-72 w-screen bg-lime-500' id="dernieres-nouvelles" >

            <BoutonCodeConnu ImageSource={IconHTML} ModalNameTitle={[JsonData.modHTML.title]} ModalNameContent={[JsonData.modHTML.content]} />

        </div >

    );
};

export default CodeConnu;