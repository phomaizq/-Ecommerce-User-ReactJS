import axios from 'axios';
import {base_url} from '../../utils/base_url';
import { config } from "../../utils/axiosconfig";

const getProducts = async (data) => {
    const response = await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}`: ""}`);
    if (response.data){
        return response.data;
    }
}
// phần sau ${base_url}product là làm sau này khi làm phần sort mới cần thêm vào
const getProduct = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data){
        return response.data;
    }
}

const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, {prodId}, config)
    if (response.data){
        return response.data;
    }
}
const rateProduct = async (data) => {
    const response = await axios.put(`${base_url}product/rating`, data, config)
    if (response.data){
        return response.data;
    }
}




export const productService = {
    getProducts,
    getProduct,
    addToWishlist,
    rateProduct
   
}