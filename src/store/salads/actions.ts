import { ISalad, SaladsAction, SaladsActionTypes } from './types';
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

      salads.forEach((salad: ISalad) => {
        const composition = salad.composition;
        const molecules: IMolecule[] = [];
        composition.forEach(async (id: string | IMolecule) => {
          if (typeof id === 'string') {
            const molecule: any = await getMolecule(id);
            molecules.push(molecule);

            console.log('MOLECULES', molecules);
            console.log(saladsWithExpandedComposition);
          }
        });
        saladsWithExpandedComposition.push({
          ...salad,
          composition: molecules,
        });
      });
      dispatch(fetchSaladsSuccess(saladsWithExpandedComposition));
    } catch (e) {
      dispatch(fetchSaladsFailure('Sorry, there was an error loading salads'));
    }
  };
};
