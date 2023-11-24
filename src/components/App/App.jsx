import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container, Section } from "./GlobalStyle";
import { FindCont } from "components/FindCont/FindCont";

export const App = () => {

  return <Section>
      <h1>PhoneBook</h1>
      <ContactForm  />
      <Container>
        <h2>Contacts</h2>
        <FindCont />
      <ContactsList/>
      </Container>
    </Section>
}


