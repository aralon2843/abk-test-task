import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';

const Order: React.FC = (): JSX.Element => {
  const orderSalad = useSelector((state: RootState) => state.order.salad);

  return (
    <>
      <Header />
      <Container>
        <Content>{typeof orderSalad}</Content>
      </Container>
    </>
  );
};

export default Order;
