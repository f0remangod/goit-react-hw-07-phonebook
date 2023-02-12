import { createSlice } from '@reduxjs/toolkit';
import initialValues from '../json/initialValues';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValues,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
