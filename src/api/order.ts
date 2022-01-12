import axios, { AxiosPromise } from 'axios';

interface IOrderRequest {
  id: string;
  qty: number;
}

export const makeOrder = async (order: IOrderRequest[]): Promise<any> => {
  return axios.post<AxiosPromise>('http://test-job.webatom.ru/order', {
    molecules: order,
  });
};
