import { IOrderState, OrderAction, OrderActionTypes } from './types';

const initialState: IOrderState = {
  salad: null,
};

const orderReducer = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case OrderActionTypes.ADD_ORDER:
      return {
        salad: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
