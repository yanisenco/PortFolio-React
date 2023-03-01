import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/contact/contact.css'
import CardContact from 'src/components/molecule/cardContact/CardContact';
import Title from 'src/components/atom/title/Title';
import fleche from 'src/assets/images/fleche-bouclee.png';
import ImageTexte from 'src/components/atom/imageTexte/ImageTexte';

const Contact = () => {

    return (

        <div className={classNames("h-200 w-screen","invertGradientBackground")}>
            <Title id={"contact"} titre={"Mes Contacts"} classname="my-10"/>
            <CardContact />
            <ImageTexte image={fleche} titre={"Moove and Resize"} />          
        </div >

    );
};

export default Contact;