import { ISalad } from '../../store/salads/types';
import {
  Button,
  DiscountPrice,
  Price,
  Title,
} from '../Molecules/Molecules.styles';
import { SaladsWrapper, SaladWrapper } from './Salads.styled';

interface ISaladsProps {
  salads: ISalad[] | null;
}

const Salads: React.FC<ISaladsProps> = ({ salads }): JSX.Element => {
  return (
    <SaladsWrapper>
      {salads?.map((salad) => (
        <SaladWrapper>
          <Title>{salad.title}</Title>
          {salad.price === salad.discount_price ? (
            <Price>Цена: {salad.price}</Price>
          ) : (
            <DiscountPrice>
              Цена с учетом скидки: {salad.discount_price}
            </DiscountPrice>
          )}
          <Button>Добавить в корзину</Button>
        </SaladWrapper>
      ))}
    </SaladsWrapper>
  );
};

export default Salads;
