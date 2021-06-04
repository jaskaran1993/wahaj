import { productConstants, orderConstants, userConstants } from "../actions/constants";

const initState = {
    products: [],
    users: [],
    orders:[],
};

export default (state = initState, action) => {
    

    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
          break;

          case userConstants.GET_ALL_USERS_SUCCESS:
                console.log('action1',action.payload)
            state = {
                ...state,
                users: action.payload.users
            }
          break;

          case orderConstants.GET_ALL_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders
            }
          break;
          
            
      }



    return state;
}