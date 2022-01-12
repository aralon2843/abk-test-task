import { useDispatch, useSelector } from 'react-redux';
import { IMolecule } from '../../store/molecules/types';
import { postOrderThunk } from '../../store/order/actions';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';
import { Button, Price, Title } from '../Molecules/Molecules.styles';
import { OrderFooter, OrderInner, OrderWrapper } from './Order.styles';
import OrderList from '../OrderList/OrderList';
import Loader from '../Loader/Loader';

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
              {error && <Title>{error}</Title>}
              {status === 'loading' ? (
                <Loader />
              ) : orderSalad ? (
                Array.isArray(orderSalad) ? (
                  <>
                    {orderSalad.map((molecule) => (
                      <OrderList molecule={molecule} />
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
                      <OrderList molecule={molecule} />
                    ))}

                    <OrderFooter>
                      <Price>Общая стоимость: {orderSaladPrice}</Price>
                      <Button onClick={postOrderButtonClick}>
                        Оформить заказ
                      </Button>
                    </OrderFooter>
                  </>
                )
              ) : status === 'succeeded' ? (
                <Title>Спасибо, ваш заказ отправлен!</Title>
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
