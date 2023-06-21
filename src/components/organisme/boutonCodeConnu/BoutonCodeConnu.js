import React, { useState } from 'react';
import PersonnalModal from 'src/components/organisme/Modal';
import style from 'src/components/organisme/boutonCodeConnu/boutonCodeConnu.css';
import classNames from 'classnames';


const BoutonCodeConnu = (
    { ImageSource, ModalNameTitle, ModalNameContent, Anchor, Id }
) => {

    const [openModal, setIsOpen] = useState(false);

    function activateScroll() {
        setIsOpen();
        const body = document.body;
        body.style.position = '';
        }
      
    function disableScroll() {
        const body = document.body;
        body.style.position = 'fixed';
        }



    return (
        <div id={Id} className="self-end mr-40">
        <a href={Anchor} >
            <button onClick={() => { setIsOpen(true); disableScroll()}} >
                <img src={ImageSource} className={classNames("duration-300 hover:duration-300 hover:-rotate-12 hover:scale-110","breathing-button")} alt=""/>
            </button>
            {
                openModal && <PersonnalModal ModalNameTitle={ModalNameTitle} ModalNameContent={ModalNameContent} CloseButton={activateScroll} />
            }
            </a>
        </div>
    );
};

export default BoutonCodeConnu;