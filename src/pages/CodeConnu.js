import React from 'react';
import BoutonCodeConnu from 'src/components/organisme/BoutonCodeConnu';
import data from 'src/assets/texte/données';



const CodeConnu = () => {

    const cards = data.codes.map((code) =>
    <BoutonCodeConnu ImageSource={code.icon} ModalNameTitle={code.title} ModalNameContent={code.content} Anchor={code.anchor} Id={code.id}/>
    );
    return (
        <div className='w-screen bg-slate-900 bg-fondCode bg-repeat-y bg-cover flex flex-col' id="competences" >{cards}</div >
    );
};

export default CodeConnu;