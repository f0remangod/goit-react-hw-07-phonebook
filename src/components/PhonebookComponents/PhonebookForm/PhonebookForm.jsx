import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Btn } from './PhonebookForm.styled';
import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../../redux/contactsSlice';

export const PhonebookForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('no handler for such field');
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const contact = {
      name,
      phone: number,
    };

    const alreadyExists = data.findIndex(item => {
      const existingItem = item.name.toLowerCase();
      const newItem = contact.name.toLowerCase();
      return existingItem === newItem;
    });

    switch (alreadyExists >= 0) {
      case true:
        Notify.failure(`${contact.name} is already in contacts`);
        break;
      default:
        await addContact(contact);
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        placeholder="Enter phone number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInputChange}
        required
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
