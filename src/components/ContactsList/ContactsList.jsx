import { Container, Item, List, Btn } from "./ContactsList.styled";
import { useDispatch, useSelector } from 'react-redux';
import { initialFilter } from "redux/filterSlice";
import { deleteContact, fetchContacts } from "redux/operations";
import { useEffect } from "react";

export const ContactsList = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts.contacts);
const filter = useSelector(state => state.filter.filter)

useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
    
 const filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  ;
    const removeContact = (id) => [
        dispatch(deleteContact(id)),
        dispatch(initialFilter())
  ]
    return <Container>
        <List>
            {filterContacts.map(({id, name, number}) => (
                <Item key={id}>
                    <p>{name}:</p><p>{number}</p>
                <Btn id={id} onClick={evt => removeContact(evt.target.id)}>Delete</Btn>
                </Item>
                
            ))}
    </List>
    </Container>
}