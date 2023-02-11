import React from 'react';
import Title from 'src/components/atom/title/Title';
import style from 'src/pages/aboutMe/aboutme.css';
import perso from 'src/assets/images/avatar.svg';
import data from 'src/assets/texte/aboutme';

const AboutMe = () => {
    return (
        <div>
            <Title id={"aboutme"} titre={"A Propos de moi"} classname="my-10"/>
            <div className="h-screen">
                <img src={perso} className="shapePerso w-104" alt="" />

                <div className="text-white">
                <p className="w-300">{data.presentation}</p>
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;