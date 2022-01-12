import { IMolecule } from '../molecules/types';
import { ISalad } from '../salads/types';

export interface IOrderState {
  orderSalad: ISalad | IMolecule[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export enum OrderActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  POST_ORDER = 'POST_ORDER',
  POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS',
  POST_ORDER_ERROR = 'POST_ORDER_ERROR',
}

export interface AddOrder {
  type: OrderActionTypes.ADD_ORDER;
  payload: ISalad | IMolecule[];
}

export interface PostOrder {
  type: OrderActionTypes.POST_ORDER;
}

export interface PostOrderSuccess {
  type: OrderActionTypes.POST_ORDER_SUCCESS;
}

export interface PostOrderError {
  type: OrderActionTypes.POST_ORDER_ERROR;
  payload: string;
}

export type OrderAction =
  | AddOrder
  | PostOrder
  | PostOrderSuccess
  | PostOrderError;
