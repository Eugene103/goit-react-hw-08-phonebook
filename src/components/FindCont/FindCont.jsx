import { checkFilter } from "redux/filter/slice";
import { Label } from "./FindCont.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from "redux/filter/selectors";
import { selectContacts } from "redux/contacts/selectors";

export const FindCont = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)

    const changeFilter = (value) => {
    dispatch(checkFilter(value))
    }
    const checkContacts = contacts.length > 0
    return checkContacts
    ?<Label htmlFor="findName">Find contacts by name
        <input type="text" id="findName" name="findName" onChange={evt => changeFilter(evt.target.value)} value={filter}/>
        </Label>
    : (<p>Oops, no one is there</p>)
}