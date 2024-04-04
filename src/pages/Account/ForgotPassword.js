import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from "../../components/Restore/CustomInput";
import { useFormik } from "formik"
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { forgotPassToken } from '../../features/user/userSlice';

let schema = yup.object().shape({
    email: yup.string().email("Vui lòng nhập email đúng định dạng").required("Vui lòng nhập email để lấy lại mật khẩu"),
});
const ForgotPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(forgotPassToken(values))
                
        }
    })
  return (
    <>
        <Meta title={'Lấy lại mật khẩu'} />
        <BreadCrumb title='Forgot-Password' />
        <div className='forgotpassword-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Lấy lại mật khẩu</h3>
                            <p className="text-center mt-2 mb-3">
                                Chúng tôi sẽ gửi mail xác nhận đến địa chỉ mail của bạn
                            </p>
                            <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput 
                                    type="email" 
                                    name="email" 
                                    placeholder="Nhập email" 
                                    className='form-control' 
                                    value= {formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")} 
                                />
                                <div>
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                        Xác nhận
                                        </button>
                                        <Link to="/login">Trở về</Link>
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

export default ForgotPassword