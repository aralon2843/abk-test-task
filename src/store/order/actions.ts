import { Dispatch } from 'react';
import { makeOrder } from '../../api/order';
import { IMolecule } from '../molecules/types';
import { ISalad } from '../salads/types';
import { OrderAction, OrderActionTypes } from './types';

export const addOrder = (payload: ISalad | IMolecule[]): OrderAction => {
  return {
    type: OrderActionTypes.ADD_ORDER,
    payload,
  };
};

export const postOrder = (): OrderAction => {
  return {
    type: OrderActionTypes.POST_ORDER,
  };
};

export const postOrderSuccess = (): OrderAction => {
  return {
    type: OrderActionTypes.POST_ORDER_SUCCESS,
  };
};

export const postOderFailure = (payload: string): OrderAction => {
  return {
    type: OrderActionTypes.POST_ORDER_ERROR,
    payload,
  };
};

export const postOrderThunk = (order: { id: string; qty: number }[]) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch(postOrder());
    try {
      await makeOrder(order);
      dispatch(postOrderSuccess());
    } catch (e) {
      dispatch(postOderFailure('Sorry, there was an error making order'));
    }
  };
};
