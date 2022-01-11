import React from 'react';
import Header from '../Header/Header';
import Salads from '../Salads/Salads';
import { Container, Content } from './App.styles';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Salads />
        </Content>
      </Container>
    </>
  );
};

export default App;
