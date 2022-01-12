import { IOrderState, OrderAction, OrderActionTypes } from './types';

const initialState: IOrderState = {
  error: null,
  status: 'idle',
  orderSalad: null,
};

const orderReducer = (
  state = initialState,
  action: OrderAction
): IOrderState => {
  switch (action.type) {
    case OrderActionTypes.ADD_ORDER:
      return {
        ...state,
        orderSalad: action.payload,
      };
    case OrderActionTypes.DELETE_ORDER:
      return {
        ...state,
        orderSalad: null,
      };
    case OrderActionTypes.POST_ORDER:
      return {
        ...state,
        status: 'loading',
      };

    case OrderActionTypes.POST_ORDER_SUCCESS:
      return {
        ...state,
        orderSalad: null,
        status: 'succeeded',
      };

    case OrderActionTypes.POST_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'failed',
      };

    default:
      return state;
  }
};

export default orderReducer;
