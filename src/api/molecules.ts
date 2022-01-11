import axios, { AxiosPromise } from 'axios';
import { IMolecule } from '../store/molecules/types';

export const getMolecules = async (): Promise<IMolecule[]> => {
  return axios
    .get<AxiosPromise>('http://test-job.webatom.ru/molecules')
    .then((response: any) => response.data.result);
};

export const getMolecule = async (
  id: string
): Promise<IMolecule | IMolecule[]> => {
  return axios
    .get<AxiosPromise>(`http://test-job.webatom.ru/molecule/${id}`)
    .then((response: any) => response.data.result);
};
