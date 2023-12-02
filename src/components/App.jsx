import styles from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import ContactListItem from './ContactListItem/ContactListItem';
import { SearchFilter } from './SearchFilter/SearchFilter';

const App = () => {
  return (
    <div className={styles.appBox}>
      <h1 className={styles.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.phonebookTitle}>Contacts</h2>
      <SearchFilter />
      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};
export default App;
