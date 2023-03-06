import { AxiosResponse } from 'axios';
import { IProduct } from '../interface';
import { Axios } from './axiosConfig/axios';

export class productService {
    static async getAll(sort?: string, order?: string): Promise<AxiosResponse> {
        const response = await Axios.get<IProduct[]>('products', {
            params: {
                ...(sort && { sort }),

                ...(order && { order }),
            },
        });

        return response;
    }

    static async createProduct(product: IProduct): Promise<AxiosResponse> {
        const response = await Axios.post<IProduct>('products', product);

        return response;
    }

    static async deleteProduct(id: number): Promise<AxiosResponse> {
        const response = await Axios.delete<void>(`products/${id}`);

        return response;
    }

    static async getById(id: string | undefined): Promise<AxiosResponse> {
        const response = await Axios.delete<IProduct>(`products/${id}`);

        return response;
    }
}
