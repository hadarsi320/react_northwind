import { useForm } from "react-hook-form";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/notify";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

export function AddProduct(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productService.addProduct(product)
            notify.success("Product has been added")
            navigate('/products');
        } catch (err: any) {
            notify.error(err)
        }
    }

    return (
        <div className="AddProduct">
			<form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type='text' {...register("name", ProductModel.NameValidation)}/>
                <span className='error'>{formState.errors?.name?.message}</span> 

                <label>Price: </label>
                <input type='number' {...register("price", ProductModel.PriceValidation)} />
                <span className='error'>{formState.errors?.price?.message}</span> 

                <label>Stock: </label>
                <input type='number' {...register("stock", ProductModel.StockValidation)} />
                <span className='error'>{formState.errors?.stock?.message}</span> 

                <label>Image: </label>
                <input type='file' {...register("image", ProductModel.ImageValidation)} />
                <span className='error'>{formState.errors?.image?.message}</span> 

                <button>Add</button>
            </form>
        </div>
    );
}
