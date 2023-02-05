import React from 'react';
import classNames from 'classnames';
import style from 'src/pages/contact/contact.css'
import CardContact from 'src/components/molecule/cardContact/CardContact';

const Contact = () => {

    return (

        <div className={classNames("h-200 w-screen","invertGradientBackground")} id="contact" >
            <CardContact />
        </div >

    );
};

export default Contact;