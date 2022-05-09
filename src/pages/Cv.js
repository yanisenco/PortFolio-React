import React from 'react';
import { saveAs } from "file-saver";
import Home from '../assets/images/icons8-accueil-90.png'
import Download from '../assets/images/icons8-télécharger-90.png'
import CVpdf from '../assets/pdf/CV4.pdf'
import CVjpg from '../assets/images/CVjpg.jpg'



const saveFile = () => {
    saveAs(
        "https://drive.google.com/file/d/1eDW6DIfzjrsA-iI50gicpUgbG7mF6ZUU/view?usp=sharing",
        "example.pdf"
    );
};


const Cv = () => {
    return (
        <div>
            <div className='grid grid-cols-2 place-items-center'>
                <a href="/" className='duration-300 hover:opacity-80'>
                    <img src={Home} alt="" />
                </a>

                <a href={process.env.PUBLIC_URL + CVpdf} download={"test.pdf"} className='duration-300 hover:opacity-80'>
                    <img src={Download} alt="" />
                </a>
            </div>

            <div>
                <div className='m-auto w-200 duration-300 hover:opacity-90'>
                    <button onClick={saveFile} download>
                        <img src={CVjpg} alt="CV" className='relative w-200' />
                    </button>
                </div>

            </div >
        </div>
    );
};

export default Cv;