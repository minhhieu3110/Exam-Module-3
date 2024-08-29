import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditProduct() {
    const navigate = useNavigate();
    const [updateProduct, setUpdateProduct] = useState({title:'', price:'', description:''})
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(res=>{
            setUpdateProduct({
                title: res.data.title,
                price: res.data.price,
                description: res.data.description,
            })
        })
    })
    return (
        <div className='form-edit'>
            <div className='top'>
                <p style={{textAlign: 'center'}}>Sửa sản phẩm</p>
            </div>
            <div className='bottom'>
                <Formik
                    initialValues={updateProduct}
                    enableReinitialize
                    onSubmit={values => {
                        axios.put(`http://localhost:3000/products/${id}`, values).then((response) => {
                            navigate('/')
                        })
                            .catch(err => console.log(err))
                    }}>
                    
                    <Form>
                        <label htmlFor='title'>Tên sản phẩm
                            <Field name='title' type='text'/>
                        </label>
                        <label htmlFor='price'>Giá
                            <Field name='price' type='text'/>
                        </label>
                        <label htmlFor='description'>Mô tả
                            <Field name='description' type='textarea'/>
                        </label>
                        <div className='btn-group'>
                            <button className='btn-action-form'>Sửa</button>
                            <Link to={'/'}>
                                <button className='btn-back'>Trở lại</button>
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}