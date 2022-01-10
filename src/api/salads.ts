import axios, { AxiosPromise } from 'axios';
// import { ISalad } from '../store/salads/types';

// interface IGetSaladResponse {
//   result: ISalad[];
//   success: string;
// }

export const getSalads = () => {
  return axios
    .get<AxiosPromise>('http://test-job.webatom.ru/salads')
    .then((response: any) => response.data.result);
};
