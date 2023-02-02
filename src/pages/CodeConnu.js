import React from 'react';

import IconHTML from 'src/assets/images/icons8-html-5.svg';
import IconCSS from 'src/assets/images/icons8-css3.svg';
import IconPYTHON from 'src/assets/images/icons8-python.svg';
//import IconREACT from 'src/assets/images/icons8-react-native.svg';
import HeaderCodeConnu from 'src/components/organisme/HeaderCodeConnu';
import BoutonCodeConnu from 'src/components/organisme/BoutonCodeConnu';
import JsonData from 'src/assets/texte/données';
import CardAnimated from 'src/components/molecule/cardAnimated/CardAnimated'


const CodeConnu = () => {

    return (

        <div className='w-screen md:bg-fondCode bg-cover md:bg-none' >


            <HeaderCodeConnu />
            <BoutonCodeConnu ImageSource={IconHTML} ModalNameTitle={[JsonData.modHTML.title]} ModalNameContent={[JsonData.modHTML.content]} />
            <BoutonCodeConnu ImageSource={IconCSS} ModalNameTitle={[JsonData.modCSS.title]} ModalNameContent={[JsonData.modCSS.content]} />
            <BoutonCodeConnu ImageSource={IconPYTHON} ModalNameTitle={[JsonData.modPYTHON.title]} ModalNameContent={[JsonData.modPYTHON.content]} />
            <CardAnimated/>
        </div >

    );
};

export default CodeConnu;