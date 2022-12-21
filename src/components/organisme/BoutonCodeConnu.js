import React, { useState } from 'react';
import PersonnalModal from 'src/components/organisme/Modal';

const BoutonCodeConnu = (
    { ImageSource, ModalNameTitle, ModalNameContent }
) => {

    const [openModal, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => { setIsOpen(true) }} >
                <img src={ImageSource} className="duration-300 hover:duration-300 hover:-rotate-12 hover:scale-110" alt=""/>
            </button>
            {
                openModal && <PersonnalModal ModalNameTitle={ModalNameTitle} ModalNameContent={ModalNameContent} CloseButton={setIsOpen} />
            }
        </>

    );
};

export default BoutonCodeConnu;