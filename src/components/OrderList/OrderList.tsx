import { IMolecule } from '../../store/molecules/types';
import { DiscountPrice, Price } from '../Molecules/Molecules.styles';
import { SaladInner, SaladList, SaladListItem } from '../Salads/Salads.styles';

interface IOrderListProps {
  molecule: IMolecule;
}

const OrderList: React.FC<IOrderListProps> = ({ molecule }): JSX.Element => {
  return (
    <SaladInner key={molecule._id}>
      <SaladList>
        <SaladListItem>{molecule.title}</SaladListItem>
        <SaladListItem>Количество: {molecule.qty}</SaladListItem>
        <SaladListItem>
          {molecule.price === molecule.discount_price ? (
            <Price>Цена: {molecule.price * molecule.qty}</Price>
          ) : (
            <DiscountPrice>
              Цена с учетом скидки: {molecule.discount_price * molecule.qty}
            </DiscountPrice>
          )}
        </SaladListItem>
      </SaladList>
    </SaladInner>
  );
};

export default OrderList;
