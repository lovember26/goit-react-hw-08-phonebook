import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length === 0 && isLoading === false && error === null ? (
        <p>Phonebook is empty</p>
      ) : filteredContacts.length === 0 &&
        isLoading === false &&
        error === null ? (
        <p>Contact with name '{filter}' not found</p>
      ) : (
        isLoading === false &&
        error === null && (
          <List>
            {filteredContacts.map(contact => {
              return (
                <ContactListItem
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                />
              );
            })}
          </List>
        )
      )}
    </>
  );
}
