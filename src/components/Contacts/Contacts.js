import React from 'react';
import { connect } from 'react-redux'
import actions from '../../redux/phonebook-actions';
import styles from './contacts.module.css'

const Contacts = ({ list,  onDeleteContact}) => (
    <>
        <ul className={styles.list}>
            {list.map(({number, name}) => (
                <li key={number} className={styles.listItem}>
                    <p className={styles.contactName}>{name}: {number}</p>
                    <button className={styles.contactBtn} onClick={() => onDeleteContact(number)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
);

const filteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter));    
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    list: filteredContacts(items, filter),
})


const mapDispatchToProps = dispatch => ({
    onDeleteContact: (number) => dispatch(actions.deleteContact(number)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Contacts);