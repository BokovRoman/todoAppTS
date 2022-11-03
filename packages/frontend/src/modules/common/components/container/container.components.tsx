import React from 'react';
import { ToastContainer } from 'react-toastify';
import * as Styled from './container.styled';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

function Container({ children }: IProps) {
  return (
    <Styled.Div>
      {children}
      <ToastContainer />
    </Styled.Div>
  );
}

export default Container;
