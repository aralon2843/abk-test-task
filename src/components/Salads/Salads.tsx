import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../store/order/actions';
import { ISalad } from '../../store/salads/types';
import {
  Button,
  DiscountPrice,
  Image,
  Price,
  Title,
} from '../Molecules/Molecules.styles';
import { SaladsWrapper, SaladWrapper } from './Salads.styled';

interface ISaladsProps {
  salads: ISalad[] | null;
}

const Salads: React.FC<ISaladsProps> = ({ salads }): JSX.Element => {
  const dispatch = useDispatch();
  const onButtonClick = (salad: ISalad): void => {
    dispatch(addOrder(salad));
  };

  return (
    <SaladsWrapper>
      {salads?.map((salad) => (
        <SaladWrapper>
          <Image src="https://new-science.ru/wp-content/uploads/2020/09/75785-3.jpg" />
          <Title>{salad.title}</Title>
          {salad.price === salad.discount_price ? (
            <Price>Цена: {salad.price}</Price>
          ) : (
            <DiscountPrice>
              Цена с учетом скидки: {salad.discount_price}
            </DiscountPrice>
          )}
          <Button onClick={() => onButtonClick(salad)}>
            Добавить в корзину
          </Button>
        </SaladWrapper>
      ))}
    </SaladsWrapper>
  );
};

export default memo(Salads);
