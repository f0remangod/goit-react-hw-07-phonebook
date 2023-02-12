import React from 'react';
import { Filter } from 'components/PhonebookComponents/Filter/Filter';
import { ContactsList } from 'components/PhonebookComponents/ContactsList/ContactsList';
import { PhonebookForm } from 'components/PhonebookComponents/PhonebookForm/PhonebookForm';
import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title="Add new contact">
        <PhonebookForm />
      </Section>

      {contacts.length > 0 && (
        <>
          <Section title="Filter contacts">
            <Filter />
          </Section>

          <Section title="Saved contacts">
            <ContactsList />
          </Section>
        </>
      )}
    </>
  );
};
