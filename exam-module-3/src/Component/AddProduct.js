import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddProduct() {
    const navigate = useNavigate();
    return (
        <div className='form-add'>
            <div className="top">
                <p style={{textAlign: 'center'}}>Thêm sản phẩm</p>
            </div>
            <div className="bottom">
                <Formik
                    initialValues={{
                        title: '',
                        price: '',
                        description: ''
                    }}
                    onSubmit={values => {
                        axios.post('http://localhost:3000/products', values).then((response) => {
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
                            <button className='btn-action-form'>Thêm</button>
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