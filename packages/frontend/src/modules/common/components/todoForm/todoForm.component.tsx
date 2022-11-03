/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form } from 'formik';
import { useAddTodo } from '../../hooks/useAddTodo';
import Input from '../input';
import * as Styled from './todoForm.styled';

interface IMyFormValues {
  title: string;
  description: string;
  toggle: boolean;
}

interface IProps {
  onClick: () => void;
}

export const TodoForm = ({ onClick }: IProps) => {
  const initialValues: IMyFormValues = { title: '', description: '', toggle: false };

  const addTodoMutation = useAddTodo();

  return (
    <Styled.Container>
      <Styled.FormTitle>Add todo</Styled.FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const newTodo = {
            title: values.title,
            todo: values.description,
            private: values.toggle,
            completed: false
          };

          addTodoMutation.mutate(newTodo);
          actions.setSubmitting(false);
          onClick();
        }}
      >
        <Form>
          <Input label="Add title" name="title" />
          <Input label="Add Description" name="description" />

          <Styled.InputCheckbox>
            {' '}
            <Styled.Label htmlFor="private">Private</Styled.Label>
            <Styled.FieldCheckbox id="private" type="checkbox" name="toggle" />
          </Styled.InputCheckbox>
          <Styled.BtnWrap>
            {' '}
            <Styled.Button type="submit">Add Todo</Styled.Button>
          </Styled.BtnWrap>
        </Form>
      </Formik>
    </Styled.Container>
  );
};
