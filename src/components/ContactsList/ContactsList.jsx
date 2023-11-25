import { Container, Item, List, Btn } from "./ContactsList.styled";
import { useSelector, useDispatch } from 'react-redux';
import { initialFilter } from "redux/filter/slice";
import { deleteContact, fetchContacts} from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selectors";
import { useEffect } from "react";


export const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
 const filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  ;
    const removeContact = (id) => [
        dispatch(deleteContact(id)),
        dispatch(initialFilter())
    ]
    const checkContacts = contacts > 0
    return <Container>
        {<List>
            {filterContacts.map(({id, name, number}) => (
                <Item key={id}>
                    <p>{name}:</p><p>{number}</p>
                <Btn id={id} onClick={evt => removeContact(evt.target.id)}>Delete</Btn>
                </Item>
                
            ))}
    </List>} 
    </Container>
       
}