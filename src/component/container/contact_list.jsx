import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from './pure/contact';
import ContactForm from './pure/form/contactForm';

const ContactListComponent = () => {
    
    const defaultConctact1 = new Contact('Leandro', false);
    const defaultConctact2 = new Contact('Ivo', false);
    const defaultConctact3 = new Contact('Tiki', false);

    const [contacts, setContacts] = useState([defaultConctact1, defaultConctact2, defaultConctact3]);

    function connectedContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contact List</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) =>{
                                    return(
                                        <ContactComponent 
                                        key={ index } 
                                        contact={ contact }
                                        connected={ connectedContact }
                                        remove={ deleteContact }
                                        >
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={ addContact }></ContactForm>
        </div>
    );
}

export default ContactListComponent;
