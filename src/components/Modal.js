import React, { useState } from 'react';
import TripleBouton from './TripleBouton';

const PersonnalModal = (
    { ModalNameTitle, ModalNameContent, CloseButton }
) => {

    const [grow, setStateGrow] = useState(false);
    const [contrast, setStateContrast] = useState(true);

    return (
        <div className={contrast ? "fixed inset-0 bg-stone-700/[.8] duration-300" : "fixed inset-0 bg-stone-500/[.8] duration-300"}>
            <div className={grow ? "fixed inset-0 bg-slate-900 duration-300" : "fixed top-26 left-62 right-62 bottom-26 bg-slate-900 rounded-xl duration-300"}>

                <TripleBouton CloseButton={CloseButton} MinimizeButton={setStateGrow} ContrastButton={setStateContrast} />
                <h5 className='text-slate-200 text-6xl text-center'>{ModalNameTitle}</h5>
                <div className='text-slate-200 mt-5 text-4xl text-center'>{ModalNameContent}</div>


            </div >
        </div >
    );


};

export default PersonnalModal;