import styles from './container.module.css'

import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div className={styles.container}>
      <Form option="Phonebook"/>
    
      <h2 className={styles.contactList}>Contacts</h2>
    
      <Filter/>    
      <Contacts/>
    </div>
  );
}