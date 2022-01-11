import { IMolecule } from '../molecules/types';

export interface ISalad {
  _id: string;
  title: string;
  price: number;
  discount_price: number;
  composition: IMolecule[];
}

export interface ISaladFromRequest {
  _id: string;
  title: string;
  price: number;
  discount_price: number;
  composition: string[];
}

export interface ISaladsState {
  salads: ISalad[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export enum SaladsActionTypes {
  GET_SALADS = 'GET_SALADS',
  GET_SALADS_SUCCESS = 'GET_SALADS_SUCCESS',
  GET_SALADS_ERROR = 'GET_SALADS_ERROR',
}

export interface GetSalads {
  type: SaladsActionTypes.GET_SALADS;
}
export interface GetSaladsSuccess {
  type: SaladsActionTypes.GET_SALADS_SUCCESS;
  payload: ISalad[];
}
export interface GetSaladsError {
  type: SaladsActionTypes.GET_SALADS_ERROR;
  payload: string;
}

export type SaladsAction = GetSalads | GetSaladsSuccess | GetSaladsError;
