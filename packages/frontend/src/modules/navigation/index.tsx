import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePageContainer from '../pages/homePage';
import TodoItemPageContainer from '../pages/todoItemPage';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import ProfilePage from '../pages/profilePage';
import { useGetCurrentUser } from '../common/hooks/useGetCurrentUser';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryUser = useGetCurrentUser();
  // console.log('queryUser', queryUser);
  const isLoggedIn = window.localStorage.getItem('token');
  // console.log('isLoggedIn', isLoggedIn);
  return (
    <Router>
      <Switch>
        {/* PUBLIC ROUTES */}
        <Route path={APP_KEYS.ROUTER_KEYS.HOME} exact>
          {!isLoggedIn ? <MainPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />}
        </Route>
        <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} exact>
          {!isLoggedIn ? <LoginPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />}
        </Route>
        <Route path={APP_KEYS.ROUTER_KEYS.REGISTER} exact>
          {!isLoggedIn ? <RegisterPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />}
        </Route>

        {/* PRIVATE ROUTES */}
        <Route path={APP_KEYS.ROUTER_KEYS.ROOT} exact>
          {isLoggedIn ? <HomePageContainer /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>
        <Route path={APP_KEYS.ROUTER_KEYS.PROFILE} exact>
          {isLoggedIn ? <ProfilePage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>
        <Route path={`${APP_KEYS.ROUTER_KEYS.ROOT}:todoId`} exact>
          {isLoggedIn ? <TodoItemPageContainer /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>
      </Switch>
    </Router>
  );
};
