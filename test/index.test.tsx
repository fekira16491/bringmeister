/** @jest-environment jsdom */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { cleanup } from "@testing-library/react";

describe("Home", () => {
    const {getByTestId} = screen

    let renderItem = beforeEach(() => {
        renderItem = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });
    afterEach(cleanup);

    it("progress ring is available or not", () => {
        const loading = getByTestId("loading-spinner") as any;
        expect(loading).toBeInTheDocument();
    });

    it("check after type the value in the search input onchange called", () => {
        const searchInput =getByTestId("search-element") as any;
        expect(searchInput.value).toEqual("");
        const mockChange = jest.fn();
        searchInput.onChange = mockChange("test");
        fireEvent.change(searchInput, { target: { value: "test" } });
        expect(mockChange).toHaveBeenCalled();
    });

    it("product list is available or not after give input", async () => {
        const searchInput = getByTestId("search-element") as any;
        await fireEvent.change(searchInput, { target: { value: "oatly" } });
        const option2 = await screen.findByText(
            "Name: Oatly Hafer Barista Edition"
        );
        expect(option2).toBeInTheDocument();
    });
});
