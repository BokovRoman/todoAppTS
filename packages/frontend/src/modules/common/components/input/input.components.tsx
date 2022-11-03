import React from 'react';
import * as Styled from './input.styled';

interface IProps {
  label: string;
  name: string;
}

const Input = ({ label, name }: IProps) => (
  <Styled.InputWrapper>
    <Styled.Label htmlFor={name}>{label}</Styled.Label>
    <Styled.StyleField id={name} name={name} placeholder={`${name}...`} />
  </Styled.InputWrapper>
);

export default Input;
