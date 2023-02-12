import PropTypes from 'prop-types';
import { Name, Item, Btn } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <Name>{name}</Name>
        <span>{number}</span>
        <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
          X
        </Btn>
      </Item>
    </>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
