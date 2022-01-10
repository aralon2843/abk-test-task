import axios, { AxiosPromise } from 'axios';
import { ISalad } from '../store/salads/types';

export const getSalads = async (): Promise<ISalad[]> => {
  return axios
    .get<AxiosPromise>('http://test-job.webatom.ru/salads')
    .then((response: any) => response.data.result);
};
