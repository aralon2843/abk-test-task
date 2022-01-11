import { IMolecule } from '../../store/molecules/types';
import {
  Button,
  DiscountPrice,
  Image,
  MoleculeWrapper,
  Price,
  Quantity,
  Title,
} from '../Molecules/Molecules.styles';
import { CreatedSaladWrapper } from './CreatedSalad.styles';

interface ICreatedSaladProps {
  createdSalad: IMolecule[];
}

const CreatedSalad: React.FC<ICreatedSaladProps> = ({
  createdSalad,
}): JSX.Element => {
  return (
    <>
      <CreatedSaladWrapper>
        <h2>Ваш собственный салат:</h2>
        {createdSalad.map((molecule) => (
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
        <Button>Добавить в козину</Button>
      </CreatedSaladWrapper>
    </>
  );
};
export default CreatedSalad;
