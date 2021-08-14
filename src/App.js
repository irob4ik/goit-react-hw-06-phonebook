import { useState, useMemo, useEffect } from 'react';

import styles from './container.module.css'

import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]);
  const [filter, setFilter] = useState('');

  const formSubmit = data => {
    const check = contacts.find(contact =>
      contact.name === data.name);

    check ?
      alert(`${data.name} is already in contacts`)
      :
      setContacts(prevState => [...prevState, data]);
  }

  const changeFilter = evt => {
    const { value } = evt.currentTarget;

    setFilter(value);
  }

  const deleteContact = (contactNum) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.number !== contactNum));
  }

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    
    return (
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    );
  }, [contacts, filter]);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      return setContacts(localContacts);
    }
    return;
  }, [])

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className={styles.container}>
      <Form
        option="Phonebook"
        submit={formSubmit}
      />
    
      <h2 className={styles.contactList}>Contacts</h2>
    
      <Filter
        value={filter}
        onChange={changeFilter}
      />
    
      <Contacts
        list={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}