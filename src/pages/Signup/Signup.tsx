import { Logo } from '../../components/Common/Logo/Logo';
import { AuthContainer } from '../../components/Auth/Common/AuthContainer.styled';
import { SignupForm } from '../../components/Auth/SignupForm/SignupForm';

export const Signup = () => {
  return (
    <AuthContainer>
      <Logo />
      <SignupForm />
    </AuthContainer>
  );
};
