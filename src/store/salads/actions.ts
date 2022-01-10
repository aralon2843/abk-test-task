import { ISalad, SaladsAction, SaladsActionTypes } from './types';
import { Dispatch } from 'react';
import { getSalads } from '../../api/salads';

export const fetchSalads = (): SaladsAction => {
  return {
    type: SaladsActionTypes.GET_SALADS,
  };
};

export const fetchSaladsSuccess = (payload: ISalad[]): SaladsAction => {
  return {
    type: SaladsActionTypes.GET_SALADS_SUCCESS,
    payload,
  };
};

export const fetchSaladsFailure = (payload: string): SaladsAction => {
  return {
    type: SaladsActionTypes.GET_SALADS_ERROR,
    payload,
  };
};

export const fetchSaladsThunk = () => {
  return async (dispatch: Dispatch<SaladsAction>) => {
    dispatch(fetchSalads());
    try {
      const salads = await getSalads();
      dispatch(fetchSaladsSuccess(salads));
    } catch (e) {
      dispatch(fetchSaladsFailure('Sorry, there was an error loading posts'));
    }
  };
};
