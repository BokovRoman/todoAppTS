import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useGetById } from '../../hooks/useGetById';
import { useUpdateById } from '../../hooks/useUpdateById';
import { useUpdatePrivate } from '../../hooks/useUpdatePrivate';
import { useUpdateCompleted } from '../../hooks/useUpdateCompleted';
import * as Styled from './todoItem.styled';
import * as FormStyled from '../todoForm/todoForm.styled';
import { IStatusPrivate, IStatusCompleted } from '../../types/todos.type';
import Input from '../input';

interface IMyFormValues {
  title: string;
  description: string;
  toggle: boolean;
  completed: boolean;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
    id: string;
  };
}

const TodoItem = () => {
  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const history = useHistory();

  const { data } = useGetById(location?.state?.id);

  const updateByIdMutation = useUpdateById();

  const updatePrivateMutation = useUpdatePrivate();
  // console.log('updatePrivateMutation', updatePrivateMutation);

  const updateCompletedMutation = useUpdateCompleted();
  // console.log('updateCompletedMutation', updateCompletedMutation);

  const initialValues: IMyFormValues = {
    title: data?.data.title,
    description: data?.data.todo,
    toggle: data?.data.private,
    completed: data?.data.completed
  };

  const onClickGoBack = () => {
    history.push(link);
  };

  const onClickEdit = () => {
    setIsOpenEditForm((prevIsOpenEditForm) => !prevIsOpenEditForm);
  };

  const onClickPrivateToggle = (id: string, privateStatus: IStatusPrivate) => {
    const updatedPrivateStatus = {
      data: {
        private: privateStatus.private
      },
      id
    };

    updatePrivateMutation.mutate(updatedPrivateStatus);
  };

  const onClickCompletedToggle = (id: string, completedStatus: IStatusCompleted) => {
    const updatedCompletedStatus = {
      data: {
        completed: completedStatus.completed
      },
      id
    };

    updateCompletedMutation.mutate(updatedCompletedStatus);
  };

  return (
    <div>
      {data && (
        <>
          <Styled.TodoTitle>{data?.data.title}</Styled.TodoTitle>
          <Styled.Title>Describton:</Styled.Title>
          <Styled.Describtion>{data?.data.todo}</Styled.Describtion>
        </>
      )}

      <Styled.StateWrapper>
        <Styled.Title>Private:</Styled.Title>
        {data && data?.data.private === true ? (
          <Styled.TrueWrapper
            onClick={() => onClickPrivateToggle(data?.data._id, { private: false })}
          >
            <Styled.Toggle />
          </Styled.TrueWrapper>
        ) : (
          <Styled.FalseWrapper
            onClick={() => onClickPrivateToggle(data?.data._id, { private: true })}
          >
            <Styled.Toggle />
          </Styled.FalseWrapper>
        )}
      </Styled.StateWrapper>

      <Styled.StateWrapper>
        <Styled.Title>Completed:</Styled.Title>
        {data && data?.data.completed === true ? (
          <Styled.TrueWrapper
            onClick={() => onClickCompletedToggle(data?.data._id, { completed: false })}
          >
            <Styled.Toggle />
          </Styled.TrueWrapper>
        ) : (
          <Styled.FalseWrapper
            onClick={() => onClickCompletedToggle(data?.data._id, { completed: true })}
          >
            <Styled.Toggle />
          </Styled.FalseWrapper>
        )}
      </Styled.StateWrapper>

      <Styled.EditWrapper>
        <Styled.BtnEdit type="button" onClick={onClickEdit}>
          Edit
        </Styled.BtnEdit>

        {/* {isOpenEditForm && <TodoForm onClick={() => {}} />} */}
        {isOpenEditForm && (
          <Styled.FormContainer>
            <FormStyled.FormTitle>Edit todo</FormStyled.FormTitle>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                const updatedTodo = {
                  data: {
                    title: values.title,
                    todo: values.description,
                    private: values.toggle,
                    completed: values.completed
                  },
                  id: location?.state?.id
                };
                updateByIdMutation.mutate(updatedTodo);
                // eslint-disable-next-line no-console
                // console.log({ values, actions });
                onClickEdit();
                actions.setSubmitting(false);
              }}
            >
              <Form>
                <Input label="Add title" name="title" />
                <Input label="Add Description" name="description" />

                <FormStyled.InputCheckbox>
                  {' '}
                  <FormStyled.Label htmlFor="private">Private</FormStyled.Label>
                  <FormStyled.FieldCheckbox id="private" type="checkbox" name="toggle" />
                </FormStyled.InputCheckbox>
                <FormStyled.InputCheckbox>
                  {' '}
                  <FormStyled.Label htmlFor="completed">Completed</FormStyled.Label>
                  <FormStyled.FieldCheckbox id="completed" type="checkbox" name="completed" />
                </FormStyled.InputCheckbox>
                <FormStyled.BtnWrap>
                  {' '}
                  <FormStyled.Button type="submit">Edit Todo</FormStyled.Button>
                </FormStyled.BtnWrap>
              </Form>
            </Formik>
          </Styled.FormContainer>
        )}
      </Styled.EditWrapper>

      <Styled.BtnBack type="button" onClick={onClickGoBack}>
        Back
      </Styled.BtnBack>
    </div>
  );
};

export default TodoItem;
