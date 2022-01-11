import axios, { AxiosPromise } from 'axios';
import { ISaladFromRequest } from '../store/salads/types';

export const getSalads = async (): Promise<ISaladFromRequest[]> => {
  return axios
    .get<AxiosPromise>('http://test-job.webatom.ru/salads')
    .then((response: any) => response.data.result);
};
