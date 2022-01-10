export interface IMolecule {
  _id: string;
  title: string;
  qty: number;
  price: number;
  discount_price: number;
  image: string;
}

export interface IMoleculeState {
  molecules: IMolecule[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export enum MoleculesActionTypes {
  GET_MOLECULES = 'GET_MOLECULES',
  GET_MOLECULES_SUCCESS = 'GET_MOLECULES_SUCCESS',
  GET_MOLECULES_ERROR = 'GET_MOLECULES_ERROR',
}

export interface GetMolecules {
  type: MoleculesActionTypes.GET_MOLECULES;
}

export interface GetMoleculesSuccess {
  type: MoleculesActionTypes.GET_MOLECULES_SUCCESS;
  payload: IMolecule[];
}

export interface GetMoleculesError {
  type: MoleculesActionTypes.GET_MOLECULES_ERROR;
  payload: string;
}

export type MoleculesAction =
  | GetMolecules
  | GetMoleculesSuccess
  | GetMoleculesError;
