import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { IMolecule } from '../../store/molecules/types';
import { addOrder } from '../../store/order/actions';
import {
  Button,
  DiscountPrice,
  Price,
  Quantity,
  Title,
} from '../Molecules/Molecules.styles';
import {
  CreatedSaladInner,
  CreatedSaladList,
  CreatedSaladListItem,
  CreatedSaladWrapper,
} from './CreatedSalad.styles';

interface ICreatedSaladProps {
  createdSalad: IMolecule[];
}

const CreatedSalad: React.FC<ICreatedSaladProps> = ({
  createdSalad,
}): JSX.Element => {
  const dispatch = useDispatch();

  const onButtonClick = (): void => {
    dispatch(addOrder(createdSalad));
  };

  return (
    <>
      <CreatedSaladWrapper>
        {createdSalad.length > 0 ? (
          <>
            <Title>Ваш собственный салат:</Title>
            {createdSalad.map((molecule) => (
              <CreatedSaladInner key={molecule._id}>
                <CreatedSaladList>
                  <CreatedSaladListItem>{molecule.title}</CreatedSaladListItem>
                  <CreatedSaladListItem>
                    Количество: {molecule.qty}
                  </CreatedSaladListItem>
                  <CreatedSaladListItem>
                    {molecule.price * molecule.qty ===
                    molecule.discount_price * molecule.qty ? (
                      <Price>Цена: {molecule.price * molecule.qty}</Price>
                    ) : (
                      <DiscountPrice>
                        Цена с учетом скидки:{' '}
                        {molecule.discount_price * molecule.qty}
                      </DiscountPrice>
                    )}
                  </CreatedSaladListItem>
                </CreatedSaladList>
                <Quantity></Quantity>
              </CreatedSaladInner>
            ))}
            <Button onClick={onButtonClick}>Добавить в козину</Button>
          </>
        ) : (
          <Title>Вы пока ничего не выбрали</Title>
        )}
      </CreatedSaladWrapper>
    </>
  );
};
export default memo(CreatedSalad);
