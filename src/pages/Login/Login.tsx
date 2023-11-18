import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { Logo } from '../../components/Common/Logo/Logo';
import { AuthContainer } from '../../components/MainStyles/ComponentCommon/AuthContainer.styled';

export const Login = () => {
  return (
    <AuthContainer>
      <Logo />
      <LoginForm />
    </AuthContainer>
  );
};