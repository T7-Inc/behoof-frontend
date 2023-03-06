interface ISize {
    width: number;
    height: number;
}
export interface IProduct {

    id: number;
    imageUrl: string;
    name: string;
    count: number,
    size: ISize;
    weight: string;
    price: number;
    rate: number;
}
