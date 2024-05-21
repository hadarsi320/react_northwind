import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { Register } from "../../UserArea/Register/Register";
import { Login } from "../../UserArea/Login/Login";

export function Routing(): JSX.Element {

    // creating a lazy component
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    // creating a suspense object
    const suspenseAbout = <Suspense> <LazyAbout /> </Suspense>

    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/products" element={<ProductList/>} />
                <Route path="/products/new" element={<AddProduct/>} />
                <Route path="/products/details/:prodId" element={<ProductDetails/>} />
                <Route path="/products/edit/:prodId" element={<EditProduct/>} />

                <Route path="/Employees" element={<EmployeeList />} />
                
                <Route path="/about" element={suspenseAbout} />
                
                <Route path="/" element={<Navigate to="/Home"/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
