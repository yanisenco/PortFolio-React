import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/contact/contact.css'
import CardContact from 'src/components/molecule/cardContact/CardContact';
import Title from 'src/components/atom/title/Title';

const Contact = () => {

    return (

        <div className={classNames("h-200 w-screen","invertGradientBackground")}>
            <Title id={"contact"} titre={"Mes Contacts"} />
            <CardContact />
        </div >

    );
};

export default Contact;