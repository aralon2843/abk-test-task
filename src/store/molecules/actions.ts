import { Dispatch } from 'react';
import { getMolecules } from '../../api/molecules';
import { IMolecule, MoleculesAction, MoleculesActionTypes } from './types';

export const fetchMolecules = (): MoleculesAction => {
  return {
    type: MoleculesActionTypes.GET_MOLECULES,
  };
};

export const fetchMoleculesSuccess = (
  payload: IMolecule[]
): MoleculesAction => {
  return {
    type: MoleculesActionTypes.GET_MOLECULES_SUCCESS,
    payload,
  };
};

export const fetchMoleculesFailure = (payload: string): MoleculesAction => {
  return {
    type: MoleculesActionTypes.GET_MOLECULES_ERROR,
    payload,
  };
};

export const fetchMoleculesThunk = () => {
  return async (dispatch: Dispatch<MoleculesAction>) => {
    dispatch(fetchMolecules());
    try {
      const molecules = await getMolecules();
      dispatch(fetchMoleculesSuccess(molecules));
    } catch (e) {
      dispatch(
        fetchMoleculesFailure('Произошла ошибка при загрузке данных')
      );
    }
  };
};
