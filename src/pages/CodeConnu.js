import React from 'react';
import BoutonCodeConnu from 'src/components/organisme/boutonCodeConnu/BoutonCodeConnu';
import data from 'src/assets/texte/competences';
import Title from 'src/components/atom/title/Title';



const CodeConnu = () => {

    const cards = data.codes.map((code) =>
    <BoutonCodeConnu ImageSource={code.icon} ModalNameTitle={code.title} ModalNameContent={code.content} Anchor={code.anchor} Id={code.id}/>
    );
    return (
        <>
        <Title titre={"My Skills"} id={"competences"} classname="my-10"/>
        <div className='w-screen bg-fondCode bg-repeat-y bg-cover flex flex-col'>{cards}</div >
        </>
    );
};

export default CodeConnu;