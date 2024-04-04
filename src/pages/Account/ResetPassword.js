import React from 'react'
import Meta from '../../components/Restore/Meta';
import BreadCrumb from '../../components/Restore/BreadCrumb';
import CustomInput from "../../components/Restore/CustomInput";
import { useLocation, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { resetPass } from '../../features/user/userSlice';

let schema = yup.object().shape({
    password: yup.string().required("Vui lòng nhập mật khẩu mới")
});
const ResetPassword = () =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const getToken = location.pathname.split('/')[2]
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(resetPass({
                token: getToken,
                password: values.password
            }))
            navigate('/login')
        }
    })
  return (
    <>
        <Meta title={'Đặt lại mật khẩu'} />
        <BreadCrumb title='Reset-Password' />
        <div className='forgotpassword-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Đặt lại mật khẩu</h3>
                        <form onSubmit={formik.handleSubmit}  className="d-flex flex-column gap-15">
                            <CustomInput 
                                type="password" 
                                name="password" 
                                placeholder="Mật khẩu mới" 
                                className='form-control' 
                                value= {formik.values.password}
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                            />
                            <div className='error'>
                                    {formik.touched.password && formik.errors.password}
                            </div>
                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Xác nhận</button>
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

export default ResetPassword