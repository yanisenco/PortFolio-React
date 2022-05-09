
import React, { useState } from 'react';

import IconHTML from '../assets/images/icons8-html-5.svg';
import IconCSS from '../assets/images/icons8-css3.svg';
import IconPYTHON from '../assets/images/icons8-python.svg';
import IconREACT from '../assets/images/icons8-react-native.svg';
import PersonnalModal from '../components/Modal';
import HeaderCodeConnu from '../components/HeaderCodeConnu';



const CodeConnu = () => {

    const [openModal, setIsOpen] = useState(false);
    const [grow, setStateGrow] = useState(false);
    const [contrast, setStateContrast] = useState(true);
    const [IDHTML, setStateHtmlButton] = useState(false);
    const [IDCSS, setStateCssButton] = useState(false);
    const [IDPYTHON, setStatePythonButton] = useState(false);
    const [IDREACT, setStateReactButton] = useState(false);

    return (

        <div className='fixed md:bg-fondCode bg-cover bg-no-repeat md:bg-none' >


            <HeaderCodeConnu />


            <div>
                <button onClick={e => { ApplyModal(contrast, setStateContrast, grow, setStateGrow, setIsOpen, e.target.id, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT) }} >
                    <img src={IconHTML} className="duration-300 hover:duration-300 hover:-rotate-12 hover:scale-110" alt="" id="HTML" />
                </button>
            </div>

            <div>
                <button onClick={e => { ApplyModal(contrast, setStateContrast, grow, setStateGrow, setIsOpen, e.target.id, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT) }}>
                    <img src={IconCSS} className="duration-300 hover:duration-300 hover:rotate-12 hover:scale-110" alt="" id="CSS" />
                </button>
            </div>
            <div>
                <button onClick={e => { ApplyModal(contrast, setStateContrast, grow, setStateGrow, setIsOpen, e.target.id, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT) }}>
                    <img src={IconPYTHON} className="duration-500 hover:duration-500 hover:rotate-180 hover:scale-125" alt="" id="PYTHON" />
                </button>
            </div>
            <div>
                <button onClick={e => { ApplyModal(contrast, setStateContrast, grow, setStateGrow, setIsOpen, e.target.id, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT) }}>
                    <img src={IconREACT} className="duration-300 hover:duration-300 hover:rotate-45 hover:scale-75" alt="" id="REACT" />
                </button>
            </div>

            {
                openModal && <PersonnalModal closeModal={setIsOpen} grow={grow} setStateGrow={setStateGrow} contrast={contrast} setStateContrast={setStateContrast} setStateHtmlButton={setStateHtmlButton} setStateCssButton={setStateCssButton} setStatePythonButton={setStatePythonButton} setStateReactButton={setStateReactButton} IDHTML={IDHTML} IDCSS={IDCSS} IDPYTHON={IDPYTHON} IDREACT={IDREACT} />
            }

        </div >

    );



    function ApplyModal(contrast, setStateContrast, grow, setStateGrow, setIsOpen, e, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT) {

        if (e === 'HTML') {
            IDHTML = true
            setStateHtmlButton(true)
            setStateCssButton(false)
            setStatePythonButton(false)
            setStateReactButton(false)
            setIsOpen(true)
        }
        else if (e === 'CSS') {
            IDCSS = true
            setStateHtmlButton(false)
            setStateCssButton(true)
            setStatePythonButton(false)
            setStateReactButton(false)
            setIsOpen(true)
        }
        else if (e === 'PYTHON') {
            IDPYTHON = true
            setStateHtmlButton(false)
            setStateCssButton(false)
            setStatePythonButton(true)
            setStateReactButton(false)
            setIsOpen(true)
        }
        else if (e === 'REACT') {
            IDREACT = true
            setStateHtmlButton(false)
            setStateCssButton(false)
            setStatePythonButton(false)
            setStateReactButton(true)
            setIsOpen(true)
        }
    }





};

export default CodeConnu;