import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';

const Order: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>ОФОРМИТЬ ЗАКАЗ</div>
        </Content>
      </Container>
    </>
  );
};

export default Order;
