import { authConstants, userConstants } from "./constants";
import axios from "../helpers/axios";


export const signup = (user) => {
    console.log(user);
    return async (dispatch) => {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST});
      const res = await axios.post(`/admin/signup`, {
        ...user
      });
  
      if(res.status === 201){
        const {message} = res.data.me;
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: {
            message
          }
        });
      }else{
        if(res.status === 400){
          dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: { error: res.data.error}
          });
        }
      }
    };
  };

  export const getAllVendors = () => {
    return async dispatch =>{
    
    dispatch({ type: userConstants.GET_ALL_VENDORS_REQUEST});
    const res = await axios.get(`/vendorlist`);
    console.log(res);
    if(res.status === 200){
        const vendorList  = res.data;
        console.log(vendorList);
        dispatch({
            type: userConstants.GET_ALL_VENDORS_SUCCESS,
            payload: {users: vendorList}
        });
        }else{
            dispatch({
                type: userConstants.GET_ALL_VENDORS_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}