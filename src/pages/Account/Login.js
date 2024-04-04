import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link } from 'react-router-dom';
import CustomInput from "../../components/Restore/CustomInput";
import { useFormik } from "formik"
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {
    loginUser,
    resetState,
  } from "../../features/user/userSlice";
let schema = yup.object().shape({
    email: yup.string().email("Vui lòng nhập email đúng định dạng").required("Vui lòng nhập email"),
    password: yup.string().required("Vui lòng nhập password")
});
const Login = () => {
    const authState = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            setTimeout(() => {
                navigate('/')
            }, 500)
        }
    })
  return (
    <>
        <Meta title={'Đăng nhập'} />
        <BreadCrumb title='Login' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className='auth-card'>
                            <h3 className="text-center mb-3">Đăng nhập tài khoản</h3>
                            <form 
                                onSubmit={formik.handleSubmit} 
                                className="d-flex flex-column gap-15"
                            >
                                <CustomInput 
                                    type='email' 
                                    name='email' 
                                    placeholder='Nhập email' 
                                    value= {formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")} 
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput 
                                    type='password' 
                                    name='password' 
                                    placeholder='Nhập mật khẩu' 
                                    value= {formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className='error'>
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                    <Link className='text-end' to='/forgot-password'>Quên mật khẩu?</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                        Đăng nhập
                                        </button>
                                        <Link to="/reigister" className="button signup">
                                        Đăng ký
                                        </Link>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login