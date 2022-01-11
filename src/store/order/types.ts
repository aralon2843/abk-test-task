import { IMolecule } from '../molecules/types';
import { ISalad } from '../salads/types';

export interface IOrderState {
  salad: ISalad | IMolecule[] | null;
}

export enum OrderActionTypes {
  ADD_ORDER = 'ADD_ORDER',
}

export interface AddOrder {
  type: OrderActionTypes.ADD_ORDER;
  payload: ISalad | IMolecule[];
}

export type OrderAction = AddOrder;
