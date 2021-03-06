import axios from "../helpers/axios";
import { categoryConstants } from "./constants";


export const getAllCategory = () => {
    return async dispatch =>{
    
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST});
    const res = await axios.get(`/categories`);
    console.log(res);
    if(res.status === 200){
        const categoryList  = res.data;
        console.log(categoryList);
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: {categories: categoryList}
        });
        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}

export const addCategory = (form) =>{
    return async dispatch =>{
        dispatch({ 
            type: categoryConstants.ADD_NEW_CATEGORY_REQUEST
        });
        // console.log(form);
        const res = await axios.post(`category/create`, form);
        if(res.status === 201){
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload: {category:res.data.category}
            });
        }else{
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            });
        }
    }
}