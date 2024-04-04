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
    registerUser,
    resetState,
  } from "../../features/user/userSlice";
let schema = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().email("Vui lòng nhập email đúng định dạng").required("Vui lòng nhập email"),
    mobile: yup.string().required("Vui lòng nhập số điện thoại"),
    password: yup.string().required("Vui lòng nhập password")
});
const Reigister = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(registerUser(values));
            formik.resetForm()
            setTimeout(() => {
                dispatch(resetState())
            }, 1000);
        }
    })
  return (
    <>
        <Meta title={'Đăng ký'} />
        <BreadCrumb title='Reigister' />
        <div className='reigister-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng ký tài khoản</h3>
                            <form 
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-column gap-15"
                            >
                                <CustomInput 
                                    type="text" 
                                    name="name" 
                                    placeholder="Nhập họ và tên" 
                                    value= {formik.values.fullname}
                                    onChange={formik.handleChange("fullname")}
                                    onBlur={formik.handleBlur("fullname")}
                                />
                                <div className='error'>
                                    {formik.touched.fullname && formik.errors.fullname}
                                </div>
                                <CustomInput 
                                    type="email" 
                                    name="email" 
                                    placeholder="Nhập Email" 
                                    value= {formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")} 
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput 
                                    type="tel" 
                                    name="mobile" 
                                    placeholder="Nhập số điện thoại" 
                                    value= {formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                                <CustomInput 
                                    type="password" 
                                    name="password" 
                                    placeholder="Nhập mật khẩu" 
                                    value= {formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className='error'>
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Đăng ký</button>
                                        <Link to="/login" className="button signup">Đăng nhập</Link>
                                    </div>
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

export default Reigister