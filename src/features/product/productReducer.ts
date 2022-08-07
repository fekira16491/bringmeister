import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ProductOptions, Products } from './productTypes'



const initialState: Products = {
    productOptions: []
}

export const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductsActions: (state, action: PayloadAction<Products>) => {
            const { productOptions } = action.payload
            state.productOptions = productOptions
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProductsActions } = ProductSlice.actions
export const selectProducts = (state: RootState): ProductOptions[] =>
    state.reducer.productOptions;

export default ProductSlice.reducer