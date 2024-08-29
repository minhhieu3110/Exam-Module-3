import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {formatCurrency} from "../utils/FormatCurrency";
export default function ShowListProducts(){
    const [products, setProducts] = useState([]);
    const getData =()=>{
        axios.get("http://localhost:3000/products").then(res => {
            setProducts(res.data)
        })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, []);
    const removeProduct = (id) => {
        if(window.confirm("Are you sure you want to delete this product?")){
            axios.delete(`http://localhost:3000/products/${id}`).then(res=>{
                getData()
            })
        }
    }
    return(
        <div>
            <div>
                <p>Danh sách sản phẩm</p>
            </div>
            <Link to={'add-product'}>
                <button className='btn-action-add'>Thêm mới</button>
            </Link>
            <table border={'1'}>
                <tr style={{textAlign:'center'}}>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th colSpan={2}></th>
                </tr>
                {products.map((product,index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>
                            <Link to={`detail-product/${product.id}`}>
                                {product.title}
                            </Link>
                        </td>
                        <td>{product.description}</td>
                        <td>{formatCurrency(product.price)}</td>
                        <td>
                            <button className='btn-action-delete' onClick={()=>removeProduct(product.id)}>Xóa</button>
                        </td>
                        <td>
                            <Link to={`edit-product/${product.id}`}>
                                <button className='btn-action-edit'>Sửa</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}