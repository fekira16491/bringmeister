  //used to convert in to Euro currency format
export const  findMatchingProductInCard = (cart:any,sku: string) => {
    return cart?.data?.products?.find((x: { sku: string; }) => x.sku === sku)?.quantity || 0;
};

  //used to find the total quantaties in cart for product
export const convertCurrencyFormat = (money: number) => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(money);
};
