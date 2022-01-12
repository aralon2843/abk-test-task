import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoleculesThunk } from '../../store/molecules/actions';
import { IMolecule } from '../../store/molecules/types';
import { addOrder } from '../../store/order/actions';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import CreatedSalad from '../CreatedSalad/CreatedSalad';
import { FlexContainer } from '../App/App.styles';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Molecules from '../Molecules/Molecules';
import { Title } from '../Molecules/Molecules.styles';
import { CreateWrapper } from '../CreatedSalad/CreatedSalad.styles';

const Create: React.FC = (): JSX.Element => {
  const { molecules, status, error } = useSelector(
    (state: RootState) => state.molecules
  );

  const dispatch = useDispatch();

  const [createdSalad, setCreatedSalad] = useState<IMolecule[]>([]);
  const [isCreatedSaladInOrder, setIsCreatedSaladInOrder] =
    useState<boolean>(false);
  const onMoleculeClick = (molecule: IMolecule): void => {
    setIsCreatedSaladInOrder(false);

    const hasSameMolecule = createdSalad.some(
      (createdSaladMolecule) => molecule._id === createdSaladMolecule._id
    );

    if (!hasSameMolecule) {
      if (molecule.qty > 0) {
        molecule.qty--;

        const newSalad = [
          ...createdSalad,
          {
            ...molecule,
            qty: molecule.qty - (molecule.qty - 1),
          },
        ];

        setCreatedSalad(newSalad);
      }
    } else {
      const sameSaladWithMoreQuantity = createdSalad.map(
        (createdSaladMolecule) => {
          if (createdSaladMolecule._id === molecule._id) {
            if (molecule.qty !== 0 && molecule.qty > 0) {
              molecule.qty--;

              return {
                ...createdSaladMolecule,
                qty: createdSaladMolecule.qty + 1,
              };
            } else {
              return createdSaladMolecule;
            }
          }
          return createdSaladMolecule;
        }
      );
      setCreatedSalad(sameSaladWithMoreQuantity);
    }
  };

  const onAddButtonClick = (): void => {
    dispatch(addOrder(createdSalad));
    setCreatedSalad([]);
    setIsCreatedSaladInOrder(true);
  };

  useEffect(() => {
    dispatch(fetchMoleculesThunk());
  }, [isCreatedSaladInOrder, dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          {error && <Title>{error}</Title>}
          {status === 'loading' && !isCreatedSaladInOrder ? (
            <Loader />
          ) : (
            <CreateWrapper>
              <Molecules molecules={molecules} onClick={onMoleculeClick} />
              <CreatedSalad
                createdSalad={createdSalad}
                error={error}
                onAddButtonClick={onAddButtonClick}
                isCreatedSaladInOrder={isCreatedSaladInOrder}
              />
            </CreateWrapper>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Create;
