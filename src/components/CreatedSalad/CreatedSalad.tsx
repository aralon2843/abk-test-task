import { memo } from 'react';
import { IMolecule } from '../../store/molecules/types';
import {
  Button,
  DiscountPrice,
  Price,
  Quantity,
  Title,
} from '../Molecules/Molecules.styles';
import { CreatedSaladWrapper } from './CreatedSalad.styles';
import { SaladInner, SaladList, SaladListItem } from '../Salads/Salads.styles';

interface ICreatedSaladProps {
  createdSalad: IMolecule[];
  error: null | string | undefined;
  onAddButtonClick: () => void;
  isCreatedSaladInOrder: boolean;
}

const CreatedSalad: React.FC<ICreatedSaladProps> = ({
  createdSalad,
  error,
  onAddButtonClick,
  isCreatedSaladInOrder,
}): JSX.Element => {
  return (
    <>
      {!error && (
        <CreatedSaladWrapper>
          {createdSalad.length > 0 ? (
            <>
              <Title>Ваш собственный салат:</Title>
              {createdSalad.map((molecule) => (
                <SaladInner key={molecule._id}>
                  <SaladList>
                    <SaladListItem>{molecule.title}</SaladListItem>
                    <SaladListItem>Количество: {molecule.qty}</SaladListItem>
                    <SaladListItem>
                      {molecule.price * molecule.qty ===
                      molecule.discount_price * molecule.qty ? (
                        <Price>Цена: {molecule.price * molecule.qty}</Price>
                      ) : (
                        <DiscountPrice>
                          Цена с учетом скидки:{' '}
                          {molecule.discount_price * molecule.qty}
                        </DiscountPrice>
                      )}
                    </SaladListItem>
                  </SaladList>
                  <Quantity></Quantity>
                </SaladInner>
              ))}
              <Button onClick={onAddButtonClick}>Добавить в козину</Button>
            </>
          ) : isCreatedSaladInOrder ? (
            <Title>
              Ваш салат собран. Чтобы оформить заказ, перейдите в корзину
            </Title>
          ) : (
            <Title>Вы пока ничего не выбрали</Title>
          )}
        </CreatedSaladWrapper>
      )}
    </>
  );
};
export default memo(CreatedSalad);
