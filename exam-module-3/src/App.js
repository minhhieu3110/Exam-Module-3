import {Route, Routes} from "react-router-dom";
import ShowListProducts from "./Component/ShowListProducts";
import DetailProduct from "./Component/DetailProduct";
import AddProduct from "./Component/AddProduct";
import EditProduct from "./Component/EditProduct";
import './App.css'
export default function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<ShowListProducts/>}/>
                <Route path="detail-product/:id" element={<DetailProduct/>}/>
                <Route path="add-product" element={<AddProduct/>}/>
                <Route path="edit-product/:id" element={<EditProduct/>}/>
            </Routes>
        </>
    )
}