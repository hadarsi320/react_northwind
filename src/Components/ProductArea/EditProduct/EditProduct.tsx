import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { useForm } from "react-hook-form";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/notify";
import { useEffect } from "react";


export function EditProduct(): JSX.Element {
    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;
    
    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProduct => {
                setValue("name", dbProduct.name)
                setValue("price", dbProduct.price)
                setValue("stock", dbProduct.stock)
            })
            .catch(err => notify.error(err));
    }, [id])

    async function send(product: ProductModel) {
        try {
            console.log("sending");
            
            if (product.image) {
                product.image = (product.image as unknown as FileList)[0]
            }
            product.id = id;
            await productService.editProduct(product)
            notify.success("Product has been edited")
            navigate(`/products/details/${id}`);
        } catch (err: any) {
            notify.error(err)
        }
    }

    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type='text' {...register("name", ProductModel.NameValidation)} />
                <span className='error'>{formState.errors?.name?.message}</span> 

                <label>Price: </label>
                <input type='number' {...register("price", ProductModel.PriceValidation)} />
                <span className='error'>{formState.errors?.price?.message}</span> 

                <label>Stock: </label>
                <input type='number' {...register("stock", ProductModel.StockValidation)} />
                <span className='error'>{formState.errors?.stock?.message}</span> 

                <label>Image: </label>
                <input type='file' {...register("image")} />
                <button>Edit</button>
            </form>
        </div>
    );
}
