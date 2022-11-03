import React from 'react';
import { Form, ErrorMessage } from 'formik';
import * as Styled from './form.styled';

interface IProps {
  email: string;
  password: string;
  errors: any;
  touched: any;
  isValid: any;
  extraFieldName?: string;
  onClickGoBack: () => void;
}

const FormComponent = ({
  email,
  password,
  errors,
  touched,
  isValid,
  extraFieldName,
  onClickGoBack
}: IProps) => (
  <Form>
    <Styled.Label htmlFor={email}>
      Email
      <Styled.StyleField
        type={email}
        name={email}
        placeholder={`${email}...`}
        valid={touched.email && !errors.email}
        error={touched.email && errors.email}
      />
    </Styled.Label>
    <ErrorMessage name={email}>
      {(msg) => <Styled.InlineErrorMessage>{msg}</Styled.InlineErrorMessage>}
    </ErrorMessage>

    <Styled.Label htmlFor={password}>
      Password
      <Styled.StyleField
        type={password}
        name={password}
        placeholder={`${password}...`}
        valid={touched.password && !errors.password}
        error={touched.password && errors.password}
      />
    </Styled.Label>
    <ErrorMessage name={password}>
      {(msg) => <Styled.InlineErrorMessage>{msg}</Styled.InlineErrorMessage>}
    </ErrorMessage>

    {extraFieldName && (
      <>
        <Styled.Label htmlFor={extraFieldName}>
          Confirm
          <Styled.StyleField
            type={password}
            name={extraFieldName}
            placeholder={extraFieldName}
            valid={touched.password && !errors.password}
            error={touched.password && errors.password}
          />
        </Styled.Label>
        <ErrorMessage name={extraFieldName}>
          {(msg) => <Styled.InlineErrorMessage>{msg}</Styled.InlineErrorMessage>}
        </ErrorMessage>
      </>
    )}

    <Styled.BtnWrap>
      {' '}
      <Styled.Submit type="submit" disabled={!isValid}>
        {' '}
        Submit
      </Styled.Submit>
    </Styled.BtnWrap>
    <Styled.BtnWrap>
      {' '}
      <Styled.Button type="button" onClick={onClickGoBack}>
        Back
      </Styled.Button>
    </Styled.BtnWrap>
  </Form>
);

export default FormComponent;
