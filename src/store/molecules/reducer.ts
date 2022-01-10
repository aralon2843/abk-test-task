import { IMoleculeState, MoleculesAction, MoleculesActionTypes } from './types';

const initialState: IMoleculeState = {
  error: null,
  status: 'idle',
  molecules: null,
};

const moleculesReducer = (
  state = initialState,
  action: MoleculesAction
): IMoleculeState => {
  switch (action.type) {
    case MoleculesActionTypes.GET_MOLECULES:
      return {
        ...state,
        status: 'loading',
      };

    case MoleculesActionTypes.GET_MOLECULES_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        molecules: action.payload,
      };

    case MoleculesActionTypes.GET_MOLECULES_ERROR:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moleculesReducer;
