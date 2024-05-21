import { RegisterOptions } from "react-hook-form";

export class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static NameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name."},
        minLength: {value: 2, message: "Name is too short."},
        maxLength: {value: 100, message: "Name is too long."},
    }

    public static PriceValidation: RegisterOptions = {
        required: {value: true, message: "Missing price."},
        min: {value: 0, message: "Price is too low."},
        max: {value: 100, message: "Price is too low."},
    }

    public static StockValidation: RegisterOptions = {
        required: {value: true, message: "Missing stock."},
        min: {value: 0, message: "Stock is too low."},
        max: {value: 100, message: "Stock is too low."},
    }

    public static ImageValidation: RegisterOptions = {
        required: {value: true, message: "Missing image."},
    }
}
