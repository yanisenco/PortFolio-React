import React from 'react';

import IconHTML from 'src/assets/images/icons8-html-5.svg';
import BoutonCodeConnu from 'src/components/organisme/BoutonCodeConnu';
import JsonData from 'src/assets/texte/données';



const CodeConnu = () => {

    return (

        <div className='h-72 w-screen bg-lime-500' id="competences" >

            <BoutonCodeConnu ImageSource={IconHTML} ModalNameTitle={[JsonData.modHTML.title]} ModalNameContent={[JsonData.modHTML.content]} />

        </div >

    );
};

export default CodeConnu;