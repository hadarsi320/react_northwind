import axios, {AxiosRequestConfig} from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productActions, store } from "../Redux/store";

class ProductService {
	public async getAllProducts() {
        if(store.getState().products.length > 0) return store.getState().products;

        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        console.log(products);

        const action = productActions.initProducts(products); //create action object.
        store.dispatch(action); // send it to redux.
        return products;
    }

    public async getOneProduct(id: number) {
        const desiredProduct = store.getState().products.find(p => p.id === id);
        if(desiredProduct) return desiredProduct;

        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        console.log(product);
        return product
    }

    public async addProduct(product:ProductModel) {
        const options: AxiosRequestConfig = {headers: { "Content-Type": "multipart/form-data"} };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;

        const action = productActions.addProduct(dbProduct);
        store.dispatch(action);
        console.log(dbProduct);
    }

    public async editProduct(product:ProductModel) {
        const options: AxiosRequestConfig = {headers: { "Content-Type": "multipart/form-data"} };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;

        const action = productActions.updateProduct(dbProduct);
        store.dispatch(action);
        console.log(dbProduct);
    }

    public async deleteProduct(id: number) {
        await axios.delete(appConfig.productsUrl + id);
        const action = productActions.deleteProduct(id);
        store.dispatch(action);
    }

}

export const productService = new ProductService();
