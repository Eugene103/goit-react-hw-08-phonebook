import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FindCont } from 'components/FindCont/FindCont';
import { Container, FilterContainer } from "./Contacs.styled.jsx";

export default function Contacts() {

  return (<main><Container>
         <h1>PhoneBook</h1>
      <ContactForm  />
      <FilterContainer>
        <h2>Contacts</h2>
      <FindCont />
      <ContactsList/>
    </FilterContainer>
    </Container>
      </main>
  );
}
