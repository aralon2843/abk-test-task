import { useDispatch, useSelector } from 'react-redux';
import { IMolecule } from '../../store/molecules/types';
import { postOrderThunk } from '../../store/order/actions';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import {
  CreatedSaladInner,
  CreatedSaladList,
  CreatedSaladListItem,
} from '../CreatedSalad/CreatedSalad.styles';
import Header from '../Header/Header';
import {
  Button,
  DiscountPrice,
  Price,
  Title,
} from '../Molecules/Molecules.styles';
import { OrderFooter, OrderInner, OrderWrapper } from './Order.styles';

const Order: React.FC = (): JSX.Element => {
  const { orderSalad, error, status } = useSelector(
    (state: RootState) => state.order
  );

  const dispatch = useDispatch();

  const orderSaladPrice = Array.isArray(orderSalad)
    ? orderSalad?.reduce((sum: number, molecule: IMolecule): number => {
        return (
          sum +
          (molecule.price === molecule.discount_price
            ? molecule.price * molecule.qty
            : molecule.discount_price * molecule.qty)
        );
      }, 0)
    : orderSalad?.price === orderSalad?.discount_price
    ? orderSalad?.price
    : orderSalad?.discount_price;

  const postOrderButtonClick = (): void => {
    if (Array.isArray(orderSalad)) {
      const molecules = orderSalad.map((molecule) => ({
        id: molecule._id,
        qty: molecule.qty,
      }));
      dispatch(postOrderThunk(molecules));
    } else {
      const molecules = orderSalad?.composition?.map((molecule) => ({
        id: molecule._id,
        qty: molecule.qty,
      }));
      molecules && dispatch(postOrderThunk(molecules));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <OrderWrapper>
            <OrderInner>
              {orderSalad ? (
                Array.isArray(orderSalad) ? (
                  <>
                    {orderSalad.map((molecule) => (
                      <CreatedSaladInner key={molecule._id}>
                        <CreatedSaladList>
                          <CreatedSaladListItem>
                            {molecule.title}
                          </CreatedSaladListItem>
                          <CreatedSaladListItem>
                            Количество: {molecule.qty}
                          </CreatedSaladListItem>
                          <CreatedSaladListItem>
                            {molecule.price === molecule.discount_price ? (
                              <Price>
                                Цена: {molecule.price * molecule.qty}
                              </Price>
                            ) : (
                              <DiscountPrice>
                                Цена с учетом скидки:{' '}
                                {molecule.discount_price * molecule.qty}
                              </DiscountPrice>
                            )}
                          </CreatedSaladListItem>
                        </CreatedSaladList>
                      </CreatedSaladInner>
                    ))}
                    <OrderFooter>
                      <Price>Общая стоимость: {orderSaladPrice}</Price>
                      <Button onClick={postOrderButtonClick}>
                        Оформить заказ
                      </Button>
                    </OrderFooter>
                  </>
                ) : (
                  <>
                    <Title>{orderSalad?.title}</Title>

                    {orderSalad?.composition?.map((molecule: IMolecule) => (
                      <CreatedSaladInner>
                        <CreatedSaladList>
                          <CreatedSaladListItem>
                            {molecule.title}
                          </CreatedSaladListItem>
                          <CreatedSaladListItem>
                            Количество: {molecule.qty}
                          </CreatedSaladListItem>
                          <CreatedSaladListItem>
                            {molecule.price === molecule.discount_price ? (
                              <Price>
                                Цена: {molecule.price * molecule.qty}
                              </Price>
                            ) : (
                              <DiscountPrice>
                                Цена с учетом скидки:{' '}
                                {molecule.discount_price * molecule.qty}
                              </DiscountPrice>
                            )}
                          </CreatedSaladListItem>
                        </CreatedSaladList>
                      </CreatedSaladInner>
                    ))}

                    <OrderFooter>
                      <Price>Общая стоимость: {orderSaladPrice}</Price>
                      <Button onClick={postOrderButtonClick}>
                        Оформить заказ
                      </Button>
                    </OrderFooter>
                  </>
                )
              ) : (
                <Title>Вы пока ничего не добавили в корзину</Title>
              )}
            </OrderInner>
          </OrderWrapper>
        </Content>
      </Container>
    </>
  );
};

export default Order;
