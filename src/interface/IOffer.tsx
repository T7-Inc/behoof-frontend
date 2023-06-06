export interface IOffer {
    imgUrl: string;
    sellerRating: string | null;
    shippingFrom: string | null;
    shippingTo: string | null;
    shippingPrice: number | null;
    productPrice: number | null;
    totalPrice: number | null;
    available: boolean | null;
    sellerUrl: string;
}
