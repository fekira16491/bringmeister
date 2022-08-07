/** @jest-environment jsdom */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Product from "../src/components/Product";

describe("Home", () => {
    var renderItem: any;
    const {getByTestId} = screen
    beforeEach(() => {
        renderItem = render(
            <Product
                name="Alnatura Bio Eier Bruderküken"
                image="//assets.bringmeister.de/media/p/36244210021/0/a91689dc9c61e4991f1b86d031684274.jpg"
                baseUnit="1 Stück"
                sku="36244210021"
                price={12}
            />
        );
    });

    it("name  contain the correct value", () => {
        const listelement = getByTestId("name-id") as any;
        expect(listelement).toHaveTextContent("Alnatura Bio Eier Bruderküken");
    });
    it("price  contain the correct value", () => {
        const listelement = getByTestId("price-id") as any;
        expect(listelement).toHaveTextContent("12");
    });
    it("baseUnit  contain the correct value", () => {
        const listelement = getByTestId("base-id") as any;
        expect(listelement).toHaveTextContent("1 Stück");
    });

    it("sku  contain the correct value", () => {
        const listelement = getByTestId("cart-id") as any;
        expect(listelement).toHaveTextContent("0");
    });
});
