import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {formatCurrency} from "../utils/FormatCurrency";
export default function DetailProduct(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(res=>{
            setProduct(res.data)
        })
            .catch(err => console.log(err))
    },[])
    return(
        <div className="form-detail-product">
            <div className='top'>
                <p style={{textAlign:'center'}}>Chi tiết sản phẩm</p>
            </div>
            <div className='bottom'>
                <h2>Tên sản phẩm: {product.name}</h2>
                <h4>Mô tả: {product.description}</h4>
                <h4>Giá: {formatCurrency(product.price)}</h4>
                <Link to={'/'}>
                    <button className='btn-back'>Trở lại</button>
                </Link>
            </div>
            
        </div>
    )
}