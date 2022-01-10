import { memo } from 'react';
import { IMolecule } from '../../store/molecules/types';
import {
  DiscountPrice,
  Image,
  MoleculeWrapper,
  Price,
  Quantity,
  Title,
} from './Molecules.styles';

interface IMoleculesProps {
  molecules: IMolecule[] | null;
}

const Molecules: React.FC<IMoleculesProps> = ({ molecules }): JSX.Element => {
  return (
    <>
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
        </MoleculeWrapper>
      ))}
    </>
  );
};

export default memo(Molecules);
