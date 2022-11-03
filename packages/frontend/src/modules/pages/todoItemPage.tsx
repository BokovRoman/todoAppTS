import React from 'react';
import Header from '../common/components/header';
import TodoItem from '../common/components/todoItem/todoItem.components';
import Container from '../common/components/container/container.components';

const TodoItemPageContainer = () => (
  <Container>
    <Header />
    <TodoItem />
  </Container>
);

export default TodoItemPageContainer;
