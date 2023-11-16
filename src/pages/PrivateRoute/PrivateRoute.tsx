import { Navigate } from 'react-router-dom';
import { useTypeSelector } from '../../services/redux/customHook/typeHooks';
import { selectAuthUser } from '../../services/redux/auth/selectors';
import { IPropsPages } from '../../interfaces/compInterfaces';

export const PrivateRoute = ({ component, redirectTo }: IPropsPages) => {
  const { isLoggedIn, isAppLoaded } = useTypeSelector(selectAuthUser);

  return (
    <>
      {isLoggedIn && component}
      {!isLoggedIn && isAppLoaded && <Navigate to={redirectTo} />}
    </>
  );
};
