import React, {useEffect, useState} from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import * as yup from 'yup';
import {useFormik} from 'formik'
import { useDispatch, useSelector } from "react-redux"
import { updateAUser } from '../../features/user/userSlice';
import { AiFillEdit } from "react-icons/ai";
let schema = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ tên của bạn"),
    email: yup.string().email("Vui lòng nhập email đúng định dạng").required("Vui lòng nhập email"),
    mobile: yup.string().required("Vui lòng nhập số điện thoại"),
});
const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.user)
    const [edit, setEdit] = useState(true)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          fullname: userState?.fullname,
          email: userState?.email,
          mobile: userState?.mobile,
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(updateAUser(values))
            setEdit(true)
        }
      })
  return (
    <>
        <Meta title={'Profile'} />
        <BreadCrumb title='Profile' />
        <div className='profile-wrapper home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3>Cập nhật profile</h3>
                            <AiFillEdit className='fs-3' onClick={() => setEdit(false)} />
                        </div>
                    </div>
                    <div className="col-12">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="example1" className="form-label">Họ và tên</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="example1"
                                    name='fullname'
                                    value= {formik.values.fullname}
                                    onChange={formik.handleChange("fullname")}
                                    onBlur={formik.handleBlur("fullname")}
                                    disabled={edit}
                                />
                                <div className='error mt-2'>
                                    {formik.touched.fullname && formik.errors.fullname}
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Địa chỉ email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    name='email'
                                    value= {formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    disabled={edit}
                                />
                                <div className='error mt-2'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMobile1" className="form-label">Số điện thoại</label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="exampleInputMobile1" 
                                    name='mobile'
                                    value= {formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                    disabled={edit}
                                />
                                <div className='error mt-2'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                            </div>
                            {
                                edit === false && 
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                >
                                    Save
                                </button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile