import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Container, Form, Label, Btn } from "./LoginForm.styled.jsx";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (<Container>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <input type="email" name="email" />
      </Label>
      <Label >
        Password
        <input type="password" name="password" />
      </Label>
      <Btn type="submit">Log In</Btn>
    </Form>
    </Container>
  );
};