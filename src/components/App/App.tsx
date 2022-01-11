import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaladsThunk } from '../../store/salads/actions';
import { RootState } from '../../store/store';
import Header from '../Header/Header';
import Salads from '../Salads/Salads';
import { Container, Content } from './App.styles';

const App: React.FC = (): JSX.Element => {
  const salads = useSelector((state: RootState) => state.salads.salads);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!salads) dispatch(fetchSaladsThunk());
  }, [salads]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Salads salads={salads} />
        </Content>
      </Container>
    </>
  );
};

export default App;
