export interface ProductOptions {
    name: string;
    image: string;
    price: number;
    baseUnit: string;
    sku: string
}

export interface Products {
    productOptions: ProductOptions[]
}