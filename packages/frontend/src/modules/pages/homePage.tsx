import React from 'react';
import Header from '../common/components/header';
import Container from '../common/components/container/container.components';
import TodoContainer from '../common/components/todoContainer';

const HomePageContainer = () => (
  <Container>
    <Header />
    <TodoContainer />
  </Container>
);

export default HomePageContainer;
