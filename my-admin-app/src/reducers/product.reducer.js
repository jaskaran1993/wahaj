<<<<<<< HEAD
import { productConstants } from "../actions/constants";

const initState = {
    products: []
};

export default (state = initState, action) => {
    switch(action.type){
=======
import { productConstants, userConstants } from "../actions/constants";

const initState = {
    products: [],
    users: [],
};

export default (state = initState, action) => {
    

    switch (action.type) {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
<<<<<<< HEAD
            break;
    }
=======
          break;

          case userConstants.GET_ALL_USERS_SUCCESS:
                console.log('action1',action.payload)
            state = {
                ...state,
                users: action.payload.users
            }
          break;
          
            
      }


>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc

    return state;
}