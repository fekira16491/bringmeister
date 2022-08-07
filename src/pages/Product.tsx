import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { ProductOptions } from "../features/productReducer";
import useGetCart from "../hooks/useGetCart";

//Product componenet
const Product: React.FC<ProductOptions> = ({
    name,
    image,
    price,
    baseUnit,
    sku,
}) => {
    const cart = useGetCart();

    //used to convert in to Euro currency format
    const convertCurrencyFormat = (money: number) => {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(money);
    };

    //used to find the total quantaties in cart for product
    const findMatchingProductInCard = (sku: string) => {
        return cart?.data?.products?.find((x) => x.sku === sku)?.quantity || 0;
    };

    return (
        <div className={styles.grid} >
            <div className={styles.card} data-testid ="products-container">
                <img className={styles.imgdimen} src={image}></img>
                <div
                    className={styles.listElement} 
                >
                    <label data-testid="name-id">Name: {name}</label>
                    <label data-testid="price-id">Price:{convertCurrencyFormat(price)} </label>
                    <label data-testid="base-id">Base Unit:{baseUnit}</label>
                    <button data-testid="cart-id" style={{ width: "7rem" }}>
                        Cart: {findMatchingProductInCard(sku)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
