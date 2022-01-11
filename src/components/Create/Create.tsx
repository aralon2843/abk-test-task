import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoleculesThunk } from '../../store/molecules/actions';
import { IMolecule } from '../../store/molecules/types';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import CreatedSalad from '../CreatedSalad/CreatedSalad';
import { FlexContainer } from '../CreatedSalad/CreatedSalad.styles';
import Header from '../Header/Header';
import Molecules from '../Molecules/Molecules';

const Create: React.FC = (): JSX.Element => {
  const molecules = useSelector(
    (state: RootState) => state.molecules.molecules
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoleculesThunk());
  }, []);

  const [createdSalad, setCreatedSalad] = useState<IMolecule[]>([]);

  const onMoleculeClick = (molecule: IMolecule): void => {
    const hasSameMolecule = createdSalad.some(
      (createdSaladMolecule) => molecule._id === createdSaladMolecule._id
    );

    if (!hasSameMolecule) {
      if (molecule.qty > 0) {
        molecule.qty > 0 && molecule.qty--;
        setCreatedSalad([
          ...createdSalad,
          { ...molecule, qty: molecule.qty - (molecule.qty - 1) },
        ]);
      }
    } else {
      const sameSaladWithMoreQuantity = createdSalad.map(
        (createdSaladMolecule) => {
          if (createdSaladMolecule._id === molecule._id) {
            if (molecule.qty !== 0 && molecule.qty > 0) {
              molecule.qty > 0 && molecule.qty--;

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

  console.log(createdSalad);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Собрать свой салат</h1>
          <FlexContainer>
            <Molecules molecules={molecules} onClick={onMoleculeClick} />
            <CreatedSalad createdSalad={createdSalad} />
          </FlexContainer>
        </Content>
      </Container>
    </>
  );
};

export default Create;
