import { Container, Content } from '../App/App.styles';
import Header from '../Header/Header';

const Create: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>Собрать свой салат</div>
        </Content>
      </Container>
    </>
  );
};

export default Create;
