import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';

const Salads: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>САЛАТЫ</div>
        </Content>
      </Container>
    </>
  );
};

export default Salads;
