import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Name } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Item>
      <Name>{name}</Name>
      <span>{number}</span>
      <Button type="button" onClick={() => onClick(id)}>
        delete
      </Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
