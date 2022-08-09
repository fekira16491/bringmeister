import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ProductOptions } from "../features/product/productTypes";
import useGetCart from "../hooks/useGetCart";
import {
  findMatchingProductInCard,
  convertCurrencyFormat,
} from "../helper/util";
//Product componenet
const Product: React.FC<ProductOptions> = ({
  name,
  image,
  price,
  baseUnit,
  sku,
}) => {

    let cart = useGetCart();

  return (
    <div className={styles.grid}>
      <div className={styles.card} data-testid="products-container">
        <img className={styles.imgdimen} src={image}></img>
        <div className={styles.listElement}>
          <label data-testid="name-id">Name: {name}</label>
          <label data-testid="price-id">
            Price:{convertCurrencyFormat(price)}{" "}
          </label>
          <label data-testid="base-id">Base Unit:{baseUnit}</label>
          <button data-testid="cart-id" style={{ width: "7rem" }}>
            Cart: {findMatchingProductInCard(cart, sku)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
