import React from 'react';
import data from 'src/assets/texte/contact';

const Console = () => {

    const contacts = data.contacts.map((contact) => {
        return (
            <div>
                <a href={contact.personalLink}>{contact.path}{contact.message}</a>
            </div>
        );
    }
);

    return (
        <div className="w-200 h-128 bg-[#0c0c0c] border border-[#393939] drop-shadow-2xl" id="invite-de-contact">
            <div className="h-7 bg-white flex">
                <div className="flex">
                    <h1 className="text-black">C:\_</h1>
                    <h1 className="text-black">invite de contact</h1>
                </div>
            </div>
            <div className="text-white">
                <p>Yanis Portfolio [version 2.0.19045.2364]</p>
                <p>(c) Yanis Corporation. Tous droits réservés.</p>
                <div className="mt-4">
                    {contacts}
                </div>                
            </div>
        </div>

    );
};

export default Console;