import React from 'react';

import IconHTML from '../assets/images/icons8-html-5.svg';
import IconCSS from '../assets/images/icons8-css3.svg';
import IconPYTHON from '../assets/images/icons8-python.svg';
//import IconREACT from 'src/assets/images/icons8-react-native.svg';
import HeaderCodeConnu from '../components/organisme/HeaderCodeConnu';
import BoutonCodeConnu from '../components/organisme/BoutonCodeConnu';
import JsonData from '../assets/texte/données';


const CodeConnu = () => {

    return (

        <div className='w-screen md:bg-fondCode bg-cover md:bg-none' >


            <HeaderCodeConnu />
            <BoutonCodeConnu ImageSource={IconHTML} ModalNameTitle={[JsonData.modHTML.title]} ModalNameContent={[JsonData.modHTML.content]} />
            <BoutonCodeConnu ImageSource={IconCSS} ModalNameTitle={[JsonData.modCSS.title]} ModalNameContent={[JsonData.modCSS.content]} />
            <BoutonCodeConnu ImageSource={IconPYTHON} ModalNameTitle={[JsonData.modPYTHON.title]} ModalNameContent={[JsonData.modPYTHON.content]} />

        </div >

    );
};

export default CodeConnu;