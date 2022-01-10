import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoleculesThunk } from '../../store/molecules/actions';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';
import Molecules from '../Molecules/Molecules';

const Create: React.FC = (): JSX.Element => {
  const molecules = useSelector(
    (state: RootState) => state.molecules.molecules
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!molecules) dispatch(fetchMoleculesThunk());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>Собрать свой салат</div>
          <Molecules molecules={molecules} />
        </Content>
      </Container>
    </>
  );
};

export default Create;
