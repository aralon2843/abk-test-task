import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMolecule } from '../../store/molecules/types';
import { addOrder } from '../../store/order/actions';
import { fetchSaladsThunk } from '../../store/salads/actions';
import { ISalad } from '../../store/salads/types';
import { RootState } from '../../store/store';
import {
  Button,
  DiscountPrice,
  Image,
  Price,
  Title,
} from '../Molecules/Molecules.styles';
import {
  SaladCompositionItem,
  SaladCompositionList,
  SaladsWrapper,
  SaladWrapper,
} from './Salads.styled';

const Salads: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { salads, status, error } = useSelector(
    (state: RootState) => state.salads
  );

  useEffect(() => {
    !salads && dispatch(fetchSaladsThunk());
  }, []);

  const onButtonClick = (salad: ISalad): void => {
    dispatch(addOrder(salad));
  };
  return (
    <SaladsWrapper>
      {salads?.map((salad) => (
        <SaladWrapper key={salad._id}>
          <Image src="https://new-science.ru/wp-content/uploads/2020/09/75785-3.jpg" />
          <Title>{salad.title}</Title>
          {salad.price === salad.discount_price ? (
            <Price>Цена: {salad.price}</Price>
          ) : (
            <DiscountPrice>
              Цена с учетом скидки: {salad.discount_price}
            </DiscountPrice>
          )}
          <Title>Состав:</Title>
          <SaladCompositionList>
            {salad?.composition.map((molecule: any) => (
              <SaladCompositionItem>
                <div> {molecule?.title}</div> <div>{molecule?.qty}шт.</div>
              </SaladCompositionItem>
            ))}
          </SaladCompositionList>
          <Button onClick={() => onButtonClick(salad)}>
            Добавить в корзину
          </Button>
        </SaladWrapper>
      ))}
    </SaladsWrapper>
  );
};

export default Salads;
