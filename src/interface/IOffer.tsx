import { ProductStatuses } from '../constans';
import { IShop } from './IShop';

export interface IOffer {
    id: number;
    shop: IShop;
    shippingPrice: number;
    price: number;
    status: ProductStatuses;
    url: string;
}
