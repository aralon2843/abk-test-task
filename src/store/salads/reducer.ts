import { ISaladsState, SaladsAction, SaladsActionTypes } from './types';

const initialState: ISaladsState = {
  error: null,
  status: 'idle',
  salads: null,
};

const saladsReducer = (
  state = initialState,
  action: SaladsAction
): ISaladsState => {
  switch (action.type) {
    case SaladsActionTypes.GET_SALADS:
      return {
        ...state,
        status: 'loading',
      };
    case SaladsActionTypes.GET_SALADS_SUCCESS:
      debugger;
      return {
        ...state,
        status: 'succeeded',
        salads: action.payload,
      };
    case SaladsActionTypes.GET_SALADS_ERROR:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default saladsReducer;
