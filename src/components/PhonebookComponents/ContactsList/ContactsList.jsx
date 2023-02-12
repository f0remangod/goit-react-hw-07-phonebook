import { ContactsItem } from 'components/PhonebookComponents/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact}></ContactsItem>;
      })}
    </List>
  );
};
