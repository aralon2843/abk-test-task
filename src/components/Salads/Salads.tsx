import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, deleteOrder } from '../../store/order/actions';
import { fetchSaladsThunk } from '../../store/salads/actions';
import { ISalad } from '../../store/salads/types';
import { RootState } from '../../store/store';
import Loader from '../Loader/Loader';
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
} from './Salads.styles';
const Salads: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { salads, status, error } = useSelector(
    (state: RootState) => state.salads
  );
  const { orderSalad } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    !salads && dispatch(fetchSaladsThunk());
  }, [dispatch]);

  const onAddButtonClick = (salad: ISalad): void => {
    dispatch(addOrder(salad));
  };
  const onDeleteButtonClick = (): void => {
    dispatch(deleteOrder());
  };
  return (
    <>
      {error && <Title>{error}</Title>}

      {status === 'loading' ? (
        <Loader />
      ) : (
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
              {salad?.composition.length === 0 ? (
                <Loader />
              ) : (
                <SaladCompositionList>
                  {salad?.composition.map((molecule: any) => (
                    <SaladCompositionItem>
                      <div> {molecule?.title}</div>{' '}
                      <div>{molecule?.qty}шт.</div>
                    </SaladCompositionItem>
                  ))}
                </SaladCompositionList>
              )}

              {!Array.isArray(orderSalad) && orderSalad?._id === salad._id ? (
                <Button onClick={() => onDeleteButtonClick()}>Удалить</Button>
              ) : (
                <Button onClick={() => onAddButtonClick(salad)}>
                  Добавить
                </Button>
              )}
            </SaladWrapper>
          ))}
        </SaladsWrapper>
      )}
    </>
  );
};

export default Salads;
