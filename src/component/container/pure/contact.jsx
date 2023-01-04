import React from 'react';
import { Contact } from '../../../models/contact.class';
import PropTypes from 'prop-types'

const ContactComponent = ({ contact, connected, remove }) => {

    function contactConnectedIcon(){
        if(contact.connected){
            return(
                <i onClick={() => connected(contact)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>
            )
        }else{
            return(
                <i onClick={() => connected(contact)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>
            )
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                { contactConnectedIcon() }
                <i onClick={() => remove(contact)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent;