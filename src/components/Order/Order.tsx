import { useSelector } from 'react-redux';
import { IMolecule } from '../../store/molecules/types';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import {
  CreatedSaladInner,
  CreatedSaladList,
  CreatedSaladListItem,
} from '../CreatedSalad/CreatedSalad.styles';
import Header from '../Header/Header';
import { Button, DiscountPrice, Price } from '../Molecules/Molecules.styles';
import { OrderFooter, OrderInner, OrderWrapper } from './Order.styles';

const Order: React.FC = (): JSX.Element => {
  const orderSalad = useSelector((state: RootState) => state.order.salad);

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
                    {orderSalad.map((molecule: IMolecule) => (
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
                      <Button>Оформить заказ</Button>
                    </OrderFooter>
                  </>
                ) : (
                  <>
                    <CreatedSaladInner>
                      <CreatedSaladList>
                        <CreatedSaladListItem>
                          {orderSalad?.title}
                        </CreatedSaladListItem>
                        <CreatedSaladListItem>
                          {orderSaladPrice}
                        </CreatedSaladListItem>
                      </CreatedSaladList>
                    </CreatedSaladInner>
                    <OrderFooter>
                      <Price>Общая стоимость: {orderSaladPrice}</Price>
                      <Button>Оформить заказ</Button>
                    </OrderFooter>
                  </>
                )
              ) : (
                <p>Вы пока ничего не добавили в корзину</p>
              )}
            </OrderInner>
          </OrderWrapper>
        </Content>
      </Container>
    </>
  );
};

export default Order;
