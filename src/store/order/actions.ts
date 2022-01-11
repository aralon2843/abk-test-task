import { IMolecule } from '../molecules/types';
import { ISalad } from '../salads/types';
import { OrderAction, OrderActionTypes } from './types';

export const addOrder = (payload: ISalad | IMolecule[]): OrderAction => {
  return {
    type: OrderActionTypes.ADD_ORDER,
    payload,
  };
};
