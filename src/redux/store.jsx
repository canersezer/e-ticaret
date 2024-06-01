import { configureStore } from '@reduxjs/toolkit'
import appReducers from './slices/appSlice'
import productReducers from './slices/productSlice'
import basketReducers from './slices/basketSlice'


export const store = configureStore({
    reducer: {
        app: appReducers,
        product: productReducers,
        basket: basketReducers,
    },

})