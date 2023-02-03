import React, { useState } from 'react';
import TripleBouton from 'src/components/molecule/tripleBouton/TripleBouton';

const PersonnalModal = (
    { ModalNameTitle, ModalNameContent, CloseButton }
) => {

    const [grow, setStateGrow] = useState(false);
    const [contrast, setStateContrast] = useState(true);

    return (
        <div className={contrast ? "fixed inset-0 bg-stone-700/[.8] duration-300" : "fixed inset-0 bg-stone-500/[.8] duration-300"} >
            <div className={grow ? "fixed inset-0 bg-slate-900 ease-in-out duration-300" : "fixed h-5/6 w-5/6 m-24 bg-slate-900 rounded-xl ease-in-out duration-300 border-2 border-gray-600"}>
                <TripleBouton
                    CloseButton={CloseButton}
                    MinimizeButton={setStateGrow}
                    ContrastButton={setStateContrast}
                    CloseButtonColor='bg-red-600 hover:bg-red-900'
                    MinimizeButtonColor='bg-orange-600 hover:bg-orange-900'
                    ContrastButtonColor='bg-green-600 hover:bg-green-900' />
                <h5 className='text-slate-200 text-6xl text-center'>{ModalNameTitle}</h5>
                <div className='text-slate-200 mt-5 text-4xl text-center'>{ModalNameContent}</div>
            </div >
        </div >
    );


};

export default PersonnalModal;