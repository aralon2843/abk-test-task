import React from 'react';
import Header from '../Header/Header';
import { Container, Content } from './App.styles';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>Нет ничего вкуснее, чем салат с молекулами</div>
        </Content>
      </Container>
    </>
  );
};

export default App;
