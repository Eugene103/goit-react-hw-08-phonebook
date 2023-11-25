import { useAuth } from 'hooks/useAuth';
import { useDispatch} from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, Btn } from "./UserMenu.styled.jsx";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
 
  return (
    <Container >
      <p>Welcome, {user.name}</p>
      <Btn type="button" onClick={() =>dispatch(logOut())}>
        Logout
      </Btn>
    </Container>
  );
}