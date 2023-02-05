import React from 'react';
import { saveAs } from "file-saver";
import data from 'src/assets/texte/cv'
import CardCv from 'src/components/molecule/cardCv/CardCv';
import style from 'src/pages/cv/cv.css';



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
        <div id="cv">
                <div>{parts}</div>
        </div>
    );
};

export default Cv;