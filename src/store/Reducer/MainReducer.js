import { CARDFETCHING, CARDFETCHINGERROR, CARDFETCHINGSUCCSESS, GET_PRODUCT, SETCARDSPAGE } from "../actionTypes";


const initialState = {
    card:[],
    isLoading:false,
    error:'',
    limit:3,
    page:1,

}


export const MainReducer = (state = initialState,action) => {
    switch (action.type) {
        case CARDFETCHING:
            return{...state,isLoading:action.payload}
            case CARDFETCHINGSUCCSESS:
                return{...state,card:action.payload}
                case CARDFETCHINGERROR:
                    return{...state,error:action.payload}
                    case SETCARDSPAGE:
                        return {...state,page:action.payload}
        default:
            return state;
    }
}