import { useEffect, useState } from "react";
import { productService } from "../../../Services/ProductService";
import "./ProductList.css";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { notify } from "../../../Utils/notify";

export function ProductList(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() =>{
        productService.getAllProducts()
        .then(dbProducts => {setProducts(dbProducts)})
        .catch(err => notify.error(err));
    }, []);

    return (
        <div className="ProductList">
			{products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
