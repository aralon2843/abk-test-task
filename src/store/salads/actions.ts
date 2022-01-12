import {
  ISalad,
  ISaladFromRequest,
  SaladsAction,
  SaladsActionTypes,
} from './types';
import { Dispatch } from 'react';
import { getSalads } from '../../api/salads';
import { IMolecule } from '../molecules/types';
import { getMolecule } from '../../api/molecules';

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
      const saladsWithExpandedComposition: ISalad[] = [];

      salads.forEach((salad: ISaladFromRequest) => {
        const composition = salad.composition;
        const molecules: IMolecule[] = [];
        composition.forEach((id: string | IMolecule) => {
          if (typeof id === 'string') {
            getMolecule(id).then((molecule: any) => {
              molecules.push(molecule);
              dispatch(fetchSaladsSuccess(saladsWithExpandedComposition));
            });
          }
        });
        saladsWithExpandedComposition.push({
          ...salad,
          composition: molecules,
        });
      });
    } catch (e) {
      dispatch(fetchSaladsFailure('Произошла ошибка при загрузке данных'));
    }
  };
};
