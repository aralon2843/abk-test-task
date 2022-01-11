import { memo } from 'react';
import { IMolecule } from '../../store/molecules/types';
import {
  Button,
  DiscountPrice,
  Image,
  MoleculeWrapper,
  Price,
  Quantity,
  Title,
  MoleculesWrapper,
} from './Molecules.styles';

interface IMoleculesProps {
  molecules: IMolecule[] | null;
  onClick: (molecule: IMolecule) => void;
}

const Molecules: React.FC<IMoleculesProps> = ({
  molecules,
  onClick,
}): JSX.Element => {
  return (
    <MoleculesWrapper>
      {molecules?.map((molecule) => (
        <MoleculeWrapper key={molecule._id}>
          <Image src={`http://test-job.webatom.ru${molecule.image}`} />
          <Title>{molecule.title}</Title>
          <Quantity>Количество: {molecule.qty}</Quantity>
          {molecule.price === molecule.discount_price ? (
            <Price>Цена: {molecule.price}</Price>
          ) : (
            <DiscountPrice>
              Цена с учетом скидки: {molecule.discount_price}
            </DiscountPrice>
          )}
          <Button
            disabled={molecule.qty === 0}
            onClick={() => onClick(molecule)}
          >
            Добавить в салат
          </Button>
        </MoleculeWrapper>
      ))}
    </MoleculesWrapper>
  );
};

export default memo(Molecules);
