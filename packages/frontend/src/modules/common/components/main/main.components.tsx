import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

const Main = () => {
  const location: ILocation = useLocation();

  return (
    <>
      <Link to={{ pathname: '/login', state: { from: location } }}>Login</Link>
      <Link to={{ pathname: '/register', state: { from: location } }}>Register</Link>
    </>
  );
};

export default Main;
