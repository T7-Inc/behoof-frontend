import { IOffer } from './IOffer';
import { IReview } from './IReview';

export interface IProduct {
    id: number;
    name: string;
    imageUrls: Array<string>;
    description: String;
    priceMin: number;
    priceMax: number;
    tags: Array<string>;
    offers: Array<IOffer>;
    shipping: string;
    isFavorite: boolean;
    totalRank: number;
    reviews: Array<IReview>;
}
