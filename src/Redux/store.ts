import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { addProduct, deleteProduct, initProducts, loginUser, logoutUser, registerUser, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";

// The application levle entire state (all slices):
export type AppState = {
    products: ProductModel[];
    user: UserModel;
    // employee: EmployeeModel[];
}

const ProductSlice = createSlice({
    name: "prducts", // internal use
    initialState: [],
    reducers: { initProducts, addProduct, updateProduct, deleteProduct}
})

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: { registerUser, loginUser, logoutUser }
})

// Action creations:
export const productActions = ProductSlice.actions;
export const userActions = UserSlice.actions;

// Create store:
export const store = configureStore<AppState>({
    reducer: {
        products: ProductSlice.reducer,
        user: UserSlice.reducer
    }
});
