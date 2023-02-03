import React from 'react';
import BoutonCodeConnu from 'src/components/organisme/BoutonCodeConnu';
import data from 'src/assets/texte/données';



const CodeConnu = () => {

    const cards = data.codes.map((code) =>
    <BoutonCodeConnu ImageSource={code.icon} ModalNameTitle={code.title} ModalNameContent={code.content} />
    );
    return (
        <div className='h-72 w-screen bg-lime-500' id="competences" >{cards}</div >
    );
};

export default CodeConnu;