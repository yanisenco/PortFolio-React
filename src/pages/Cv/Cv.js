import React from 'react';
import { saveAs } from "file-saver";
import data from 'src/assets/texte/cv'
import CardCv from 'src/components/molecule/cardCv/CardCv';
import Title from 'src/components/atom/title/Title';




const saveFile = () => {
    saveAs(
        "https://drive.google.com/file/d/1eDW6DIfzjrsA-iI50gicpUgbG7mF6ZUU/view?usp=sharing",
        "example.pdf"
    );
};

      
const parts = data.parts.map((part) => {
    const desc = part.description.map((description) => description )
        return (
            <CardCv description={desc} id={part.id} title={part.title}/>
        );
    }
);

const Cv = () => {
    return (
        <>
                <a href='https://drive.google.com/file/d/1zsY4DI7lQJfyvOAD-fI1Ed25Tf9Wx08I/view?usp=sharing'>
                <Title id={"cv"} titre={"Personnal Resume"} classname="my-10"/>
                <p className='text-white text-center'>Try clicking !</p>
                <div className="grid grid-flow-col sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1">{parts}</div>
                </a>
        </>
    );
};

export default Cv;