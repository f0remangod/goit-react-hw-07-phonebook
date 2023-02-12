import PropTypes from 'prop-types';
import { Name, Item, Btn } from './ContactsItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactsItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, result] = useDeleteContactMutation();

  return (
    <>
      <Item>
        {!result.isLoading ? (
          <>
            <Name>{name}</Name>
            <span>{phone}</span>
          </>
        ) : (
          <p style={{ color: 'grey' }}>Deleting contact...</p>
        )}
        <Btn
          type="button"
          disabled={result.isLoading}
          onClick={() => deleteContact(id)}
        >
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
    phone: PropTypes.string.isRequired,
  }),
};
