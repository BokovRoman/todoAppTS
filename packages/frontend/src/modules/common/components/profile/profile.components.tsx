import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory, useLocation, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { IUser } from '../../types/user.types';
import FormComponent from '../reusable/form/form.components';
// import { useLogin } from '../../hooks/useLogin';
import { useChangePassword } from '../../hooks/useChangePassword';
import { useLogout } from '../../hooks/useLogout';
import * as Styled from '../register/register.styled';

interface IMyFormValues {
  email: string;
  password: string;
  newPassword: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

const Profile = () => {
  const initialValues: IMyFormValues = { email: '', password: '', newPassword: '' };

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const changePasswordMutation = useChangePassword();
  // console.log('changePasswordMutation', changePasswordMutation);

  const history = useHistory();

  const onClickGoBack = () => {
    history.push(link);
  };

  const { mutate: logout } = useLogout();

  const onClickLogout = () => {
    logout();
    window.localStorage.removeItem('token');
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email is invalid').required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          newPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password,
            newPassword: values.newPassword
          };
          changePasswordMutation.mutate(credentials);
          // console.log(values, actions);
        }}
      >
        {({ errors, touched, isValid }) => (
          <FormComponent
            email="email"
            password="password"
            errors={errors}
            touched={touched}
            isValid={isValid}
            extraFieldName="newPassword"
            onClickGoBack={onClickGoBack}
          />
        )}
      </Formik>
      <Styled.BtnWrap>
        <Link type="button" onClick={onClickLogout} to={{ pathname: '/' }}>
          Logout
        </Link>
      </Styled.BtnWrap>
    </Styled.Container>
  );
};

export default Profile;
