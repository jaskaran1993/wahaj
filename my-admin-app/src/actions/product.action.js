import axios from "../helpers/axios";
import { productConstants } from "./constants";

<<<<<<< HEAD
// new action
export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(`product/getProducts`);
=======

const getCommonHeaders_res = ()=> {
  const accessToken = localStorage.getItem('token');
  const commonHeaders =
    {
      'Content-Type': 'application/json'
    };
    if(accessToken) {
      commonHeaders.Authorization = `Bearer ${accessToken}`;
    }
    return commonHeaders;
}

// new action
export const getProducts = () => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

console.log('config',config)
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

      const res = await axios.post(`product/getProducts`,{},{headers: config.headers});

>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// modified actrion
export const addProduct = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post(`product/create`, form);
      if (res.status === 201) {
        dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
        dispatch(getProducts());
      } else {
        dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductById = (payload) => {
    return async (dispatch) => {
      try {
        const res = await axios.delete(`product/deleteProductById`, {
          data: { payload },
        });
        dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
        if (res.status === 202) {
          dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
          dispatch(getProducts());
        } else {
          const { error } = res.data;
          dispatch({
            type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
            payload: {
              error,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };