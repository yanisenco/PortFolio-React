
import React from 'react';
import JsonData from './data/données';

function PersonnalModal({ closeModal, grow, setStateGrow, contrast, setStateContrast, setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, IDHTML, IDCSS, IDPYTHON, IDREACT }) {




    if (IDHTML === true) {
        var ModalNameTitle = [JsonData.modHTML.title]
        var ModalNameContent = [JsonData.modHTML.content]
    }
    else if (IDCSS === true) {
        ModalNameTitle = [JsonData.modCSS.title]
        ModalNameContent = [JsonData.modCSS.content]

    }
    else if (IDPYTHON === true) {
        ModalNameTitle = [JsonData.modPYTHON.title]
        ModalNameContent = [JsonData.modPYTHON.content]
    }
    else if (IDREACT === true) {
        ModalNameTitle = [JsonData.modREACT.title]
        ModalNameContent = [JsonData.modREACT.content]
    }



    function ReturnJSONTitle(X) {
        return <h5 className='text-slate-200 text-6xl text-center'>{X}</h5>
    }
    function ReturnJSONContent(X) {
        return <div className='text-slate-200 mt-5 text-4xl text-center'>{X}</div>
    }


    return (
        <div className={contrast ? "fixed inset-0 bg-stone-700/[.8] duration-300" : "fixed inset-0 bg-stone-500/[.8] duration-300"}>
            <div className={grow ? "fixed inset-0 bg-slate-900 duration-300" : "fixed top-26 left-62 right-62 bottom-26 bg-slate-900 rounded-xl duration-300"}>
                <button onClick={() => { ResetStatements(setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, closeModal) }} className='bg-red-600 w-10 h-10 m-1 mt-1.5 ml-1.5 rounded-full duration-300 hover:bg-red-900'></button>
                <button onClick={() => setStateGrow((prevgrow) => !prevgrow)} className='bg-orange-600 w-10 h-10 m-1 rounded-full duration-300 hover:bg-orange-900'></button>
                <button onClick={() => setStateContrast((prevcontrast) => !prevcontrast)} className='bg-green-500 w-10 h-10 m-1 rounded-full duration-300 hover:bg-green-900'></button>

                <div>
                    {ReturnJSONTitle(ModalNameTitle)}
                    {ReturnJSONContent(ModalNameContent)}
                </div>
            </div >
        </div >
    );

    function ResetStatements(setStateHtmlButton, setStateCssButton, setStatePythonButton, setStateReactButton, closeModal) {
        setStateHtmlButton(false)
        setStateCssButton(false)
        setStatePythonButton(false)
        setStateReactButton(false)
        closeModal(false)
    }

};

export default PersonnalModal;