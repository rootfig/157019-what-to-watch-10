import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { RouteName } from '../../utils/common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { selectAuthStatus, selectError, selectIsLoginSending } from '../../store/auth-slice/selectors';
import { setError} from '../../store/auth-slice/auth-slice';
import { AuthorizationStatus } from '../../utils/common';
import { signInValidator } from '../../utils/validator';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


const LoginScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatus);
  const isSending = useAppSelector(selectIsLoginSending);
  const error = useAppSelector(selectError);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignInSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validError = signInValidator(email, password);

    if (validError) {
      dispatch(setError(validError));
    } else {
      dispatch(loginAction({login: email, password}));
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={RouteName.Main}/>;
  }

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSignInSubmit}>
          {
            error &&
            <div className="sign-in__message">
              <p> { error } </p>
            </div>
          }

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="text"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                disabled={isSending}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                disabled={isSending}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn"
              type="submit"
              disabled={isSending}
            >
              {
                !isSending
                  ? 'Sign In'
                  : 'Sending...'
              }
            </button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default LoginScreen;
